export default function swiper () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1, // Количество отображаемых слайдов
        spaceBetween: 10, // Отступ между слайдами
        navigation: {
          nextEl: '.swiper-button-nex', // Кнопка "Следующий слайд"
          prevEl: '.swiper-button-pre', // Кнопка "Предыдущий слайд"
        },
      });
      var swipe = new Swiper('.mySwipe', {
        slidesPerView: 1, // Количество отображаемых слайдов
        spaceBetween: 10, // Отступ между слайдами
        navigation: {
          nextEl: '.swiper-button-ne', // Кнопка "Следующий слайд"
          prevEl: '.swiper-button-pr', // Кнопка "Предыдущий слайд"
        },
      });
      var swip = new Swiper('.mySwip', {
        slidesPerView: 1, // Количество отображаемых слайдов
        spaceBetween: 10, // Отступ между слайдами
        navigation: {
          nextEl: '.swiper-button-n', // Кнопка "Следующий слайд"
          prevEl: '.swiper-button-p', // Кнопка "Предыдущий слайд"
        },
      });
}