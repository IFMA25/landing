$(document).ready(function() {


  /**
  * Слайдеры
  * Docs: http://kenwheeler.github.io/slick/
  */

  // слайдер отзывов
  $('.block-review').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

    // слайдер врачей
  $('.slider-doctor').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });


});