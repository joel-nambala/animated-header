'use strict';

const slides = document.querySelectorAll('.animate');

const goToNext = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToNext(0);

let curSlide = 0;
let maxSlide = slides.length;
const TIMEOUT = 5000;

const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;

  goToNext(curSlide);
};

setInterval(nextSlide, TIMEOUT);
