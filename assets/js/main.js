let slidePosition = 0;
const mobileMenu = document.querySelector('.header__menu-btn-icon');
const listMobile = document.querySelector('.navbar__mobile');
const closeList = document.querySelector('.navbar__mobile-btn-icon');
const slides = document.querySelectorAll('.slider__item');
const trailer = document.querySelector('.content__trailer');
const btnNext = document.querySelector('.slider__actions-btn--next');
const btnPrev = document.querySelector('.slider__actions-btn--prev');
const btnVideo = document.querySelector('.content__contain-video');
const btnClose = document.querySelector('.content__trailer-close');
const totalSlides = slides.length;


// Header mobile
if(mobileMenu) {
    mobileMenu.onclick = function() {
       if(listMobile) {
           listMobile.style.right = '0%';
           closeList.onclick = function() {
                listMobile.style.right = '-100%';
           }
       }
    }

}
// slide

btnNext.onclick = moveToNextSlide;

btnPrev.onclick = moveToPrevSlide;



function updateSlicePosition() {
    for(let slide of slides) {
        slide.classList.remove('slider__item--visible');
        slide.classList.add('slider__item--hidden');
    }
    slides[slidePosition].classList.add('slider__item--visible');
}

function moveToNextSlide() {
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0
    }else {
        slidePosition++;
    }
    updateSlicePosition();
}

function moveToPrevSlide() {
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    }else {
        slidePosition--;
    }
    updateSlicePosition();
}

setInterval(moveToNextSlide, 15000);

// click btn video

btnVideo.onclick = clickVideo;
btnClose.onclick = clickVideo;

function clickVideo() {
    if(btnVideo) {
        trailer.classList.toggle('active');
    }
}


