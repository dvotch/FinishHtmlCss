const swiperServices = new Swiper(".services__swiper", {
  slidesPerView: 1,
  spaceBetween: -50,
});

const swiperBrands = new Swiper(".brands__swiper", {
  spaceBetween: -50,
  pagination: {
    el: "#brands__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiperKinds = new Swiper(".kinds__swiper", {
  spaceBetween: -50,
  pagination: {
    el: "#kinds__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiperPriceServices = new Swiper(".price-services__swiper", {
  spaceBetween: -35,
  pagination: {
    el: "#price-services-pagination",
    clickable: true,
    type: "bullets",
  },
});
