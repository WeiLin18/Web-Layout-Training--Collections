"use strict";

$(document).ready(function () {
  changeColor();
  console.log('run');
});

function changeColor() {
  var page = document.querySelector('#page');
  var link = document.querySelectorAll('.header .nav__link');
  link.forEach(function (e) {
    if (e.getAttribute('data-index') === page.getAttribute('data-index')) {
      e.classList.add('nav__link--active');
    } else {
      return;
    }
  });
} // function debounce(func, wait = 20, immediate = true) {
//   var timeout; //讓scroll跑出img有延遲，並限制scroll的讀取頻率
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
// function scrollHandler() {
//   // console.log(window.scrollY);
//   let windowTop = window.scrollY;
//   let windowBottom = windowTop + window.innerHeight;
//   let slide = document.querySelectorAll(".slide");
//   slide.forEach(item => {
//     let imgMiddle = item.offsetTop + item.height / 5;
//     if (imgMiddle < windowBottom && imgMiddle > windowTop) {
//       item.classList.add("active");
//     } 
//   })
// }
// window.addEventListener('scroll', scrollHandler);
//# sourceMappingURL=all.js.map
