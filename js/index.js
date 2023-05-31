const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  // slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperHed = new SwiperHed('.swiperHed', {
  // Optional parameters
  direction: 'vertical',
  
  slidesPerView: 1,
  spaceBetween: 40,
  centeredSlides: true,
  // slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiperHed-pagination',
    clickable: true,
  },

  loop: true,
 
});


// const slider = document.querySelector('swiper-container')

// let mySwiper = new Swiper (slider, {
//   sliderPerView: 3,
//   spaceBetween: 10,
// }) 

// const swiper = new Swiper('.swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
// });

// let swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
