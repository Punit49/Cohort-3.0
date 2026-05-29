const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const mcqs = [
  {
    q: 'console.log("10" - "5");',
    opts: ['A) 105','B) 5','C) NaN','D) Error'],
    ans: 'B',
    why: '"10" - "5" = 5. The minus operator converts strings to numbers automatically. Only + concatenates strings; all other math operators force number conversion.',
    wrong: {'A':'+ concatenates strings, but - does not. No concatenation here.','C':'NaN only when conversion fails (e.g., "hello"-5). "10" and "5" are valid numbers.','D':'JS never throws errors for basic arithmetic type coercion.'}
  },
  {
    q: 'console.log(0 == false);\nconsole.log(0 === false);',
    opts: ['A) true true','B) false false','C) true false','D) false true'],
    ans: 'C',
    why: '== does loose comparison: false → 0, so 0==false is true. === checks type too: 0 is number, false is boolean → false.',
    wrong: {'A':'=== never converts types, so 0===false is always false.','B':'== does convert, so 0==false IS true.','D':'0==false is true, not false.'}
  },
  {
    q: 'console.log("hello" - 2);',
    opts: ['A) hello2','B) undefined','C) NaN','D) Error'],
    ans: 'C',
    why: '"hello" cannot be converted to a number, so it becomes NaN. NaN - 2 = NaN.',
    wrong: {'A':'Only + can concatenate strings. - always tries math.','B':'undefined is a variable value, not an arithmetic result.','D':'JS does not throw errors for NaN arithmetic.'}
  },
  {
    q: 'let x = 5;\nconsole.log(x++);\nconsole.log(++x);',
    opts: ['A) 5 7','B) 6 7','C) 5 6','D) 6 6'],
    ans: 'A',
    why: 'x++ returns current value (5) THEN increments (x=6). ++x increments first (x=7) THEN returns (7). So: 5 then 7.',
    wrong: {'B':'x++ prints BEFORE incrementing, so first output is 5.','C':'After x++, x=6. ++x makes it 7, not 6.','D':'x++ does increment, so x becomes 6, then ++x makes it 7.'}
  },
  {
    q: 'console.log(5 ____ "5"); // should be false',
    opts: ['A) ==','B) =','C) ===','D) !='],
    ans: 'C',
    why: '5 === "5" is false because types differ (number vs string). === checks both value AND type.',
    wrong: {'A':'5 == "5" is true (loose comparison converts "5" to 5).','B':'= is assignment, not comparison.','D':'5 != "5" is false because == sees them as equal, so != gives false.'}
  },
  {
    q: 'if( ____ ){\n  console.log("Run");\n}\n// Need a falsy value',
    opts: ['A) []','B) "false"','C) 0','D) {}'],
    ans: 'C',
    why: '0 is falsy in JS. Falsy values: 0, "", null, undefined, NaN, false. The block will NOT run.',
    wrong: {'A':'[] (empty array) is truthy! Arrays are objects and always truthy.','B':'"false" is a non-empty string → truthy.','D':'{} (empty object) is truthy! Objects are always truthy.'}
  },
  {
    q: 'let day = "Sunday";\nswitch(day){\n  case "Saturday":\n  case ____:\n    console.log("Weekend");\n}',
    opts: ['A) Sunday','B) "Sunday"','C) sunday','D) "weekend"'],
    ans: 'B',
    why: 'switch uses === comparison. day = "Sunday" (string). So case must be "Sunday" (string with quotes).',
    wrong: {'A':'Sunday without quotes is a variable name, not the string "Sunday".','C':'"sunday" is lowercase — JS is case-sensitive.','D':'"weekend" doesn\'t match "Sunday" at all.'}
  },
  {
    q: 'console.log(true + true + false);',
    opts: ['A) true','B) false','C) 2','D) 0'],
    ans: 'C',
    why: 'Booleans convert to numbers in math: true=1, false=0. So 1+1+0 = 2.',
    wrong: {'A':'true is not returned; numeric addition happens.','B':'false would be 0.','D':'0 would need false+false+false.'}
  },
  {
    q: 'console.log(x);\nvar x = 10;',
    opts: ['A) Error','B) undefined','C) 10','D) null'],
    ans: 'B',
    why: 'var is hoisted to top of scope but NOT initialized. So x exists but = undefined before assignment.',
    wrong: {'A':'var hoisting prevents ReferenceError. Only let/const throw errors.','C':'x is declared AFTER the log, so value is not 10 yet.','D':'null is an intentional empty value. Hoisting gives undefined.'}
  },
  {
    q: 'console.log(a);\nlet a = 5;',
    opts: ['A) undefined','B) 5','C) null','D) ReferenceError'],
    ans: 'D',
    why: 'let is in Temporal Dead Zone (TDZ) before declaration. Accessing it throws ReferenceError.',
    wrong: {'A':'undefined is for var hoisting. let/const have TDZ.','B':'a has no value yet at that point.','C':'null is intentional empty value, not what hoisting gives.'}
  },
  {
    q: '{\n  var x = 50;\n}\nconsole.log(x);',
    opts: ['A) 50','B) undefined','C) Error','D) null'],
    ans: 'A',
    why: 'var ignores block scope {}. It leaks to the function/global scope. So x=50 is accessible outside the block.',
    wrong: {'B':'undefined would happen if x was declared but not assigned.','C':'No error — var is global/function scoped.','D':'null is never assigned here.'}
  },
  {
    q: 'console.log(typeof null);',
    opts: ['A) null','B) undefined','C) object','D) number'],
    ans: 'C',
    why: 'This is a famous JS bug! typeof null returns "object" due to a legacy error from the early days of JavaScript.',
    wrong: {'A':'"null" is what you\'d expect, but JS returns "object".','B':'"undefined" is typeof undefined.','D':'"number" is typeof 42.'}
  },
  {
    q: 'Which of these are non-primitive data types?',
    opts: ['A) string','B) objects','C) number','D) array'],
    ans: 'B and D',
    why: 'Objects and Arrays are non-primitive (reference types). Primitives: string, number, boolean, null, undefined, symbol, bigint.',
    wrong: {'A':'string is a primitive data type.','C':'number is a primitive data type.'}
  },
  {
    q: 'let a;\nlet b = null;\nconsole.log(a == b);',
    opts: ['A) false','B) true','C) undefined','D) Error'],
    ans: 'B',
    why: 'undefined == null is true in JS (special rule). They are loosely equal to each other and nothing else.',
    wrong: {'A':'JS has a special rule: null == undefined is true.','C':'undefined is a value, but console.log prints true/false.','D':'No error; loose comparison is valid.'}
  },
  {
    q: 'console.log( ____ ("42")); // should output 42 (number)',
    opts: ['A) parse','B) String','C) Boolean','D) Number'],
    ans: 'D',
    why: 'Number("42") converts the string "42" to the number 42.',
    wrong: {'A':'parse is not a standalone function. parseInt("42") works, but parse() alone doesn\'t exist.','B':'String() converts TO string, not from string.','C':'Boolean("42") gives true, not 42.'}
  },
  {
    q: 'What will be the return value of prompt() by default?',
    opts: ['A) number','B) boolean','C) string','D) object'],
    ans: 'C',
    why: 'prompt() always returns a string — even if user types "42", you get "42" as string. Use Number() to convert.',
    wrong: {'A':'Never number — always string, even for numeric input.','B':'Never boolean.','D':'Never object.'}
  },
  {
    q: 'console.log([] + []);',
    opts: ['A) []','B) 0','C) ""','D) Error'],
    ans: 'C',
    why: '[] converts to "" (empty string) when used with +. So "" + "" = "".',
    wrong: {'A':'Arrays don\'t stay as arrays with + operator.','B':'0 would come from numeric coercion, not string coercion.','D':'No error; JS coerces arrays to strings.'}
  }
];

const coding = [
  {
    title: 'Check if a Number is a Power of Two',
    difficulty: 'easy', points: 100, tag: 'Math',
    problem: 'Given an integer n, return true if n is a power of two (can be written as 2^x where x ≥ 0), otherwise return false.',
    input: 'A single integer n',
    output: 'Return true if n is a power of two, false otherwise',
    constraint: '-2³¹ ≤ n ≤ 2³¹ - 1',
    solution: `class Solution {
  isPowerOfTwo(n) {
    for (let i = 1; i <= n; i = i * 2) {
      if (i === n) return true;
    }
    return false;
  }
}
module.exports = Solution;`,
    explain: `Start i at 1. Keep multiplying by 2: 1→2→4→8→16...
If i ever equals n exactly → it's a power of two!
If i exceeds n without matching → not a power of two.
Edge: n ≤ 0 → loop never runs → returns false. ✓`
  },
  {
    title: 'Check if a Number is a Perfect Square',
    difficulty: 'easy', points: 70, tag: 'Loop',
    problem: 'Check whether a given integer is a Perfect Square. A number is a perfect square if it equals some integer × itself. Return "Yes" or "No".',
    input: 'Integer Number',
    output: 'Return "Yes" or "No"',
    constraint: 'Non-negative integer, range 0 to 10⁶',
    solution: `class Solution {
  isPerfectSquare(n) {
    for (let i = 0; i * i <= n; i++) {
      if (i * i === n) return "Yes";
    }
    return "No";
  }
}
module.exports = Solution;`,
    explain: `Try every number i starting from 0.
Check if i × i equals n.
If yes → "Yes"! If i×i exceeds n → "No".
Example: n=16 → 0,1,2,3,4 → 4×4=16 → "Yes"
Example: n=15 → 0,1,2,3,4 → 4×4=16>15 → "No"`
  },
  {
    title: 'Check if a Number is Palindromic',
    difficulty: 'easy', points: 100, tag: 'Loop',
    problem: 'Accept a positive integer and check if it is a palindrome (reads the same forwards and backwards). Return true or false.',
    input: 'Integer number',
    output: 'Return true or false',
    constraint: 'Positive integer in range 1 to 1,000,000. No negative numbers or non-numeric characters.',
    solution: `class Solution {
  isPalindrome(n) {
    const s = String(n);
    return s === s.split("").reverse().join("");
  }
}
module.exports = Solution;`,
    explain: `Convert number to string: 121 → "121"
Split into array: ["1","2","1"]
Reverse: ["1","2","1"]
Join back: "121"
Compare original "121" === "121" → true!
For 123: reverse = "321" → "123" !== "321" → false`
  }
];

function buildHTML() {
  const mcqCards = mcqs.map((m, i) => {
    const wrongEntries = Object.entries(m.wrong || {});
    return `
    <div class="card mcq-card">
      <div class="q-header">
        <span class="q-num">Q${i+1}</span>
        <span class="q-badge">MCQ</span>
      </div>
      <pre class="code-snippet">${m.q}</pre>
      <div class="options">
        ${m.opts.map(o => {
          const letter = o[0];
          const isCorrect = m.ans.includes(letter);
          return `<div class="opt ${isCorrect?'correct':'wrong-opt'}">${isCorrect?'✓':''} ${o}</div>`;
        }).join('')}
      </div>
      <div class="answer-box">
        <div class="ans-label">✅ Answer: ${m.ans}</div>
        <p class="why">${m.why}</p>
        ${wrongEntries.length ? `<div class="wrong-reasons"><div class="wr-title">❌ Why others are wrong:</div>${wrongEntries.map(([k,v])=>`<div class="wr-item"><span class="wr-key">${k})</span> ${v}</div>`).join('')}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  const codingCards = coding.map((c,i) => `
    <div class="card coding-card">
      <div class="q-header">
        <span class="q-num">Coding ${i+1}</span>
        <span class="q-badge coding-badge">${c.tag}</span>
        <span class="pts-badge">${c.points} pts</span>
        <span class="diff-badge">${c.difficulty}</span>
      </div>
      <h3 class="coding-title">${c.title}</h3>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Problem</div><div class="info-val">${c.problem}</div></div>
        <div class="info-item"><div class="info-label">Input</div><div class="info-val">${c.input}</div></div>
        <div class="info-item"><div class="info-label">Output</div><div class="info-val">${c.output}</div></div>
        <div class="info-item"><div class="info-label">Constraint</div><div class="info-val">${c.constraint}</div></div>
      </div>
      <div class="solution-label">💡 Solution</div>
      <pre class="code-block">${c.solution}</pre>
      <div class="explain-box">
        <div class="explain-title">🧠 How it works (Beginner Friendly)</div>
        <pre class="explain-text">${c.explain}</pre>
      </div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Cohort 3.0 — Test Solutions</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#0a0704;color:#e8d5b7;font-family:'Inter',sans-serif;font-size:13px;line-height:1.6;}
.cover{min-height:100vh;background:linear-gradient(135deg,#0a0704 0%,#1a0e06 40%,#2d1a0a 70%,#0a0704 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;page-break-after:always;}
.cover::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse at center,rgba(180,100,20,0.08) 0%,transparent 60%);}
.cover-badge{background:linear-gradient(135deg,#8b4513,#d4691e);padding:6px 20px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#fff;margin-bottom:24px;}
.cover-title{font-size:52px;font-weight:900;text-align:center;line-height:1.1;background:linear-gradient(135deg,#d4691e,#f4a460,#8b4513,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:16px;}
.cover-sub{font-size:16px;color:#a08060;letter-spacing:2px;text-align:center;margin-bottom:40px;}
.cover-divider{width:120px;height:2px;background:linear-gradient(90deg,transparent,#d4691e,transparent);margin:24px auto;}
.cover-stats{display:flex;gap:32px;margin-top:32px;}
.stat-box{text-align:center;background:rgba(212,105,30,0.08);border:1px solid rgba(212,105,30,0.3);border-radius:12px;padding:16px 24px;}
.stat-num{font-size:32px;font-weight:900;color:#d4691e;}
.stat-lbl{font-size:10px;color:#a08060;letter-spacing:2px;text-transform:uppercase;}
.section-header{padding:24px 32px 8px;display:flex;align-items:center;gap:12px;page-break-before:always;}
.sec-line{flex:1;height:1px;background:linear-gradient(90deg,rgba(212,105,30,0.5),transparent);}
.sec-title{font-size:20px;font-weight:700;color:#d4691e;letter-spacing:2px;text-transform:uppercase;white-space:nowrap;}
.content{padding:8px 24px 32px;}
.card{background:linear-gradient(135deg,#110a05 0%,#1a0e06 100%);border:1px solid rgba(212,105,30,0.2);border-radius:16px;padding:20px 24px;margin-bottom:20px;position:relative;overflow:hidden;page-break-inside:avoid;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#8b4513,#d4691e,#f4a460,#d4691e,#8b4513);}
.q-header{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
.q-num{background:linear-gradient(135deg,#8b4513,#d4691e);color:#fff;font-weight:700;font-size:11px;padding:4px 12px;border-radius:20px;letter-spacing:1px;}
.q-badge{background:rgba(212,105,30,0.15);border:1px solid rgba(212,105,30,0.3);color:#d4691e;font-size:10px;padding:3px 10px;border-radius:20px;letter-spacing:1px;}
.coding-badge{background:rgba(100,150,255,0.1);border-color:rgba(100,150,255,0.3);color:#6496ff;}
.pts-badge{background:rgba(80,200,80,0.1);border:1px solid rgba(80,200,80,0.3);color:#50c850;font-size:10px;padding:3px 10px;border-radius:20px;}
.diff-badge{background:rgba(255,180,50,0.1);border:1px solid rgba(255,180,50,0.3);color:#ffb432;font-size:10px;padding:3px 10px;border-radius:20px;}
.code-snippet{background:#0d0804;border:1px solid rgba(212,105,30,0.15);border-radius:8px;padding:12px 16px;font-family:'Fira Code',monospace;font-size:12px;color:#f4a460;margin-bottom:14px;white-space:pre-wrap;}
.options{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;}
.opt{padding:8px 14px;border-radius:8px;font-size:12px;font-weight:500;}
.correct{background:rgba(80,200,80,0.12);border:1px solid rgba(80,200,80,0.4);color:#60d860;font-weight:600;}
.wrong-opt{background:rgba(255,60,60,0.06);border:1px solid rgba(255,60,60,0.15);color:#c09070;}
.answer-box{background:rgba(0,0,0,0.3);border:1px solid rgba(212,105,30,0.25);border-radius:10px;padding:14px 16px;}
.ans-label{font-weight:700;color:#50c850;font-size:13px;margin-bottom:8px;}
.why{color:#c8a878;font-size:12px;line-height:1.6;margin-bottom:10px;}
.wrong-reasons{margin-top:10px;border-top:1px solid rgba(212,105,30,0.15);padding-top:10px;}
.wr-title{font-size:11px;font-weight:700;color:#d4691e;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;}
.wr-item{font-size:11px;color:#a08060;margin-bottom:4px;padding-left:4px;}
.wr-key{color:#f4a460;font-weight:600;}
.coding-title{font-size:18px;font-weight:700;color:#f4a460;margin-bottom:14px;}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;}
.info-item{background:rgba(0,0,0,0.3);border:1px solid rgba(212,105,30,0.12);border-radius:8px;padding:10px 12px;}
.info-label{font-size:10px;font-weight:700;color:#d4691e;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
.info-val{font-size:11px;color:#c8a878;}
.solution-label{font-size:11px;font-weight:700;color:#6496ff;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}
.code-block{background:#080604;border:1px solid rgba(100,150,255,0.2);border-radius:10px;padding:16px;font-family:'Fira Code',monospace;font-size:11.5px;color:#a8d4ff;white-space:pre;overflow-x:auto;margin-bottom:14px;}
.explain-box{background:rgba(0,0,0,0.3);border:1px solid rgba(80,200,80,0.2);border-radius:10px;padding:14px 16px;}
.explain-title{font-size:11px;font-weight:700;color:#50c850;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}
.explain-text{font-size:12px;color:#90c890;white-space:pre-wrap;font-family:'Fira Code',monospace;}
.footer{text-align:center;padding:32px;color:#504030;font-size:11px;letter-spacing:2px;border-top:1px solid rgba(212,105,30,0.1);}
@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact;}}
</style>
</head>
<body>
<div class="cover">
  <div class="cover-badge">Cohort 3.0</div>
  <div class="cover-title">JavaScript<br/>Test Solutions</div>
  <div class="cover-sub">Complete Q&amp;A with Explanations</div>
  <div class="cover-divider"></div>
  <div class="cover-stats">
    <div class="stat-box"><div class="stat-num">17</div><div class="stat-lbl">MCQ Questions</div></div>
    <div class="stat-box"><div class="stat-num">3</div><div class="stat-lbl">Coding Problems</div></div>
  </div>
</div>

<div class="section-header">
  <div class="sec-title">MCQ Questions</div>
  <div class="sec-line"></div>
</div>
<div class="content">${mcqCards}</div>

<div class="section-header">
  <div class="sec-title">Coding Problems</div>
  <div class="sec-line"></div>
</div>
<div class="content">${codingCards}</div>

<div class="footer">COHORT 3.0 — JavaScript Test Solutions &nbsp;|&nbsp; Beginner Friendly Reference<br/><br/><span style="color:#d4691e; font-weight:700; font-size:14px;">- Punit Sahu</span></div>
</body>
</html>`;
}

(async () => {
  const html = buildHTML();
  fs.writeFileSync(path.join(__dirname, 'cohort3-test.html'), html);
  console.log('HTML written.');

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.join(__dirname, 'Cohort3-Test-Solutions.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '8mm', right: '8mm' }
  });
  await browser.close();
  console.log('PDF created: Cohort3-Test-Solutions.pdf');
})();