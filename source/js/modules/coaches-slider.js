const coachesSwiper = document.querySelector('.coaches__swiper');
const coachesButtonPrev = document.querySelector('.coaches__button-prev');
const coachesButtonNext = document.querySelector('.coaches__button-next');

const initCoachesSlider = () => {
  if (coachesSwiper) {
    // eslint-disable-next-line
    new Swiper(coachesSwiper, {
      navigation: {
        prevEl: coachesButtonPrev,
        nextEl: coachesButtonNext,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 2,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {initCoachesSlider};
