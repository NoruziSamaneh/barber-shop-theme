$(document).ready(() => {
  $("#slider").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      rtl: true,
      autoplay: true,
      autoplayspeed: 2000,
      // prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
      // nextArrow: '<div class="slick-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>'
  });
});