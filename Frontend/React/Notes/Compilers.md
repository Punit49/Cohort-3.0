OXC (Oxidation Compiler) is a high-performance JavaScript and TypeScript tooling project written in Rust. Its goal is to provide extremely fast alternatives to the JavaScript tools that are traditionally written in JavaScript.

Think of OXC as a toolkit that can perform many of the jobs currently handled by tools such as Babel, ESLint, Prettier, and parts of bundlers, but with significantly better performance due to being written in Rust.

The name "Oxidation" comes from Rust's mascot (Ferris the crab) and the idea of "oxidizing" the JavaScript tooling ecosystem by rebuilding critical tools in Rust.

### Why was OXC created?

Modern frontend applications can contain thousands of files. Tools like Babel and ESLint must parse every file, which can make builds and linting slow as projects grow.

OXC was created to solve problems such as:

* Slow build times
* Slow linting
* High memory usage
* Multiple tools repeatedly parsing the same code

By using Rust, OXC can process source code much faster and more efficiently.

### What does OXC provide?

OXC is not just a compiler. It contains several core components:

#### Parser

Converts source code into an AST (Abstract Syntax Tree).

```javascript
const message = "Hello";
```

↓

```text
Source Code
    ↓
Parser
    ↓
AST
```

#### Linter

Acts as a faster alternative to ESLint by analyzing code and reporting issues.

Example:

```javascript
let name = "Punit";
```

If `name` is never used, the linter can report it.

#### Formatter

Formats code automatically, similar to Prettier.

Before:

```javascript
const user={name:"Punit"}
```

After:

```javascript
const user = { name: "Punit" };
```

#### Transformer

Transforms code similarly to Babel.

Example:

```javascript
const greet = (name) => `Hello ${name}`;
```

↓

```javascript
var greet = function (name) {
  return "Hello " + name;
};
```

### How does it fit into Vite?

Recent versions of Vite have started adopting OXC for tasks such as transpilation and code transformation because it is much faster than traditional JavaScript-based tooling.

Traditional React setup:

```text
JSX
 ↓
Babel
 ↓
JavaScript
 ↓
Browser
```

Modern setup with OXC:

```text
JSX
 ↓
OXC
 ↓
JavaScript
 ↓
Browser
```

### Why is OXC fast?

The main reasons are:

* Written in Rust
* Optimized memory management
* Highly efficient parsing
* Minimal runtime overhead
* Can process large codebases much faster than JavaScript-based tools

### Simple Analogy

Imagine Babel, ESLint, and Prettier are three workers checking the same book one after another.

```text
Book
 ↓
Worker 1 (Babel)
 ↓
Worker 2 (ESLint)
 ↓
Worker 3 (Prettier)
```

OXC aims to be one extremely fast worker that can perform all these tasks more efficiently.

### In One Line

OXC (Oxidation Compiler) is a Rust-based JavaScript/TypeScript tooling ecosystem designed to provide extremely fast parsing, linting, formatting, and code transformation, serving as a modern high-performance alternative to tools like Babel and ESLint.
