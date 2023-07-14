import Swiper from '../vendor/swiper';

const swiperFirst = new Swiper('.trainers__swiper', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
  },
});

const setSwiper = () => {
  if (document.body.contains(document.querySelector('.trainers'))) {
    // eslint-disable-next-line no-unused-expressions
    swiperFirst;
  }

  return;
};

export {setSwiper};
