
const slides = document.querySelectorAll('.slider');
let counter = 0;

slides.forEach((names, index) => {
    names.style.left = `${index * 100}%`
})


const sliderImage = () => {
    slides.forEach((names) => {
        names.style.transform = `translateX(-${counter * 100}%)`
    })
}

const goNext = () => {
    counter++
    if(counter == slides.length){
        counter = 0;
    }
    sliderImage();
}


const goPrev = () => {
    counter--
    if(counter <0){
        counter = slides.length-1;
    }
    sliderImage()
}

const bars = document.querySelector("#bar");
  const menu = document.querySelector(".toggel-main");
const closebtn = document.querySelector("#close")

bars.addEventListener(
    "click",
    function () {
        menu.style.display = "block"
        bars.style.display = "none";
        closebtn.style.display = "block"
    }
)

closebtn.addEventListener(
    "click",
    function () {
        menu.style.display = "none";
        bars.style.display = "block";
        closebtn.style.display = "none"
    }
)

window.addEventListener(
    "resize",
    function () {
        console.log(window.screen.width)

        if (window.screen.width > 992) {
            bars.style.display = "";
            closebtn.style.display = ""
        }
    }
)



