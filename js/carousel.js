$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50.5,
    nav: true,
    navText: [
      '<div class="container__triangle container__triangle--left"></div>',
      '<div class="container__triangle container__triangle--right"></div>',
    ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
