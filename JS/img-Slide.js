
const SliderWrapper = document.querySelector(".slidebox");
const Slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".items");

let totalSlider = slides.length;
let sliderWidth = SliderWrapper.clientWidth;
let slideIndex = 0;

Slider.style.width = sliderWidth * totalSlider + 'px';

function showSlider(n){
    slideIndex = n;
    if( slideIndex == -1 ){
        slideIndex = totalSlider - 1;
        console.log("movepic");
        console.log(slideIndex);

    }else if(slideIndex === totalSlider){
        slideIndex = 0;
        console.log("now pic");
    }
    console.log(-(sliderWidth * slideIndex) + 'px');
    Slider.style.left = -(sliderWidth * slideIndex) + 'px';
}

function plusSlides(n){
    showSlider(slideIndex += n);
    // console.log(showSlider((slideIndex += n)));
}

function currentSlides(n){
    showSlider(slideIndex = n);
}       

const nextBTN = document.querySelector(".nextbtn");
const prevBTN = document.querySelector(".prevbtn");

nextBTN.addEventListener ('click' ,() => {
    console.log("left");
    plusSlides(1);
});

prevBTN.addEventListener('click', () =>{
    console.log("right");
    plusSlides(-1);
});
