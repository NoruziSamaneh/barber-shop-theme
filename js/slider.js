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
      prevArrow: '<div class="container-md"><i class="fas fa-angle-left leftarrow arrow" aria-hidden="true"></i></div>',
      nextArrow: '<div class="container-md"><i class="fas fa-angle-right arrow" aria-hidden="true"></i></div>'
  });
});