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

$(document).ready(() => {
  $("#barbers-slider").slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      rtl: true,
      autoplay: false,
      prevArrow: '<div class="container-md"><i class="fas fa-angle-left barbers-arrow left-barbers-arrow" aria-hidden="true"></i></div>',
      nextArrow: '<div class="container-md"><i class="fas fa-angle-right barbers-arrow right-barbers-arrow" aria-hidden="true"></i></div>'
  });
});

$(document).ready(() => {
  $("#customers-slider").slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      rtl: true,
      autoplay: true,
      autoplayspeed: 2000,
  });
});