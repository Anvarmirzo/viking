$(function () {
  
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  
 $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="slick-prev slick-btn"><img class="" src="images/left.png" alt=""></button>',
    nextArrow: '<button class="slick-next slick-btn"><img class="" src="images/right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: false
        }
      }
    ]
});
$('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
   arrows: false
  });
});