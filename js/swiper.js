const swiper = new Swiper('.swiper', {
    
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
const swiperSecond = new Swiper('.swiperr.se', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  slidesPerView: "auto",
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
