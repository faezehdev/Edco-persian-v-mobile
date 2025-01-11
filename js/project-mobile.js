// product related slider
let Swiperpro= new Swiper ('.swiper-products', {
    slidesPerView: "auto",
    spaceBetween: 100,
   speed:500,
   grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    }) 