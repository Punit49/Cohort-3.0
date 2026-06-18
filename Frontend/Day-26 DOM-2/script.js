const switchBtn = document.querySelector("#switchBtn");
const bulb = document.querySelector("#bulb");

switchBtn.addEventListener("click", () => {
    let val = bulb.classList.toggle("on");
    if(val){
        switchBtn.textContent = "OFF"
    } else {
        switchBtn.textContent = "ON"
    }
});