const images = [
  "./1.jpg",  
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg"
];

const image = document.getElementById("image") 
const PrevBtn = document.getElementById("PrevBtn") 
const NextBtn = document.getElementById("NextBtn") 

let imgCounter = 0;
let maxImgCount = images.length;

NextBtn.addEventListener("click", () => {
    imgCounter++;
    if (imgCounter == maxImgCount) {
        imgCounter = 0;
    }
    image.src = images[imgCounter];
    console.log(imgCounter);
});

PrevBtn.addEventListener("click", () => {
    imgCounter--;
    if (imgCounter < 0) {
        imgCounter = maxImgCount - 1;
    }
    image.src = images[imgCounter];
    console.log(imgCounter);
});