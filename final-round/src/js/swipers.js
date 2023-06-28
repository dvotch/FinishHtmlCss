const swiperServices = new Swiper(".services__swiper", {
  slidesPerView: 1,
  spaceBetween: -50,
  breakpoints: {
    // when window width is >= 320px
    321: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

const swiperBrands = new Swiper(".brands__swiper", {
  init: false,
  spaceBetween: -50,
  pagination: {
    el: "#brands__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiperKinds = new Swiper(".kinds__swiper", {
  init: false,
  spaceBetween: -50,
  pagination: {
    el: "#kinds__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiperPriceServices = new Swiper(".price-services__swiper", {
  init: false,
  spaceBetween: -35,
  pagination: {
    el: "#price-services-pagination",
    clickable: true,
    type: "bullets",
  },
});

if (matchMedia("(max-width: 320px)").matches) {
  swiperBrands.init();
  swiperKinds.init();
  swiperPriceServices.init();
} else if (matchMedia("(max-width: 768px)").matches) {
  deleteSwipers(1);
} else {
  deleteSwipers(0);
}

function deleteSwipers(countSwipers) {
  const swipers = document.querySelectorAll(".swiper");
  const swipersWrapper = document.querySelectorAll(".swiper-wrapper");
  const swipersSlide = document.querySelectorAll(".swiper-slide");
  for (let i = countSwipers; i < swipers.length; i++) {
    swipersWrapper[i].outerHTML = swipersWrapper[i].innerHTML;
    swipers[i].outerHTML = swipers[i].innerHTML;
  }
}
