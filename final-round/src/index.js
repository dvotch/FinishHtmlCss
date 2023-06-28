const stick = document.querySelector(".header__stick");

if (matchMedia("(max-width: 320px)").matches) {
  stick.remove();
  const columns = document.querySelector(".price-services__row");
  columns.remove();
}
if (matchMedia("(min-width: 321px)").matches) {
  const items = document.querySelectorAll(".price-services__item");
  items.forEach(function (elem) {
    elem.outerHTML = elem.innerHTML;
  });
}

if (matchMedia("(min-width: 769px)").matches) {
  const items = document.querySelectorAll(".price-services__item");
  items.forEach(function (elem) {
    elem.outerHTML = elem.innerHTML;
  });
  const kind = document.querySelector(".kinds__item_disabled");
  kind.classList.remove(".kinds__item_disabled");
  const brands = document.querySelectorAll(".item_disabled");
  brands[0].classList.remove(".item_disabled");
  brands[1].classList.remove(".item_disabled");
}

if (matchMedia("(min-width: 769px)").matches) {
  const items = document.querySelectorAll(".price-services__item");
  items.forEach(function (elem) {
    elem.outerHTML = elem.innerHTML;
  });

  const kind = document.querySelector(".kinds__item_disabled");
  kind.classList.remove("kinds__item_disabled");

  const brands = document.querySelectorAll(".item_disabled");
  brands[0].classList.remove("item_disabled");
  brands[1].classList.remove("item_disabled");

  const header = document.querySelector(".site-container > header");
  header.remove();

  const burger = document.querySelector(".burger");
  burger.classList.toggle("burger_active");
  burger.style.position = "static";

  const container = document.querySelector(".site-container");
  container.style.display = "grid";
  const burgerBack = document.querySelector("#burgerBack");
  burgerBack.remove();
  const servicesButtons = document.querySelector(".services__buttons");
  servicesButtons.style.display = "flex";
  const activeServicesButton = document.querySelector(
    ".swiper-slide-service_active"
  );
  activeServicesButton.innerHTML = "Ремонтируемые бренды";
  const activeBurgerNavElement = document.querySelector(".nav__element");
  activeBurgerNavElement.classList.remove("nav__element_active");
  const burgerNavElements = document.querySelectorAll(".nav__element");
  burgerNavElements[1].classList.add("nav__element_active");
}

const burgerButton = document.querySelector(".header__burger");
const burgerBack = document.querySelector("#burgerBack");
const buttonFeedback = document.querySelector("#buttonFeedback");
const buttonFeedbackBack = document.querySelector("#feedbackBack");
const buttonCall = document.querySelector("#buttonCall");
const buttonCallBack = document.querySelector("#callBack");

burgerButton.addEventListener("click", toggleBurger);
burgerBack.addEventListener("click", toggleBurger);
buttonFeedback.addEventListener("click", () => {
  document.querySelector(".feedback__modal").classList.remove("disable");
});
buttonCall.addEventListener("click", () => {
  document.querySelector(".call__modal").classList.remove("disable");
});
buttonFeedbackBack.addEventListener("click", () => {
  document.querySelector(".feedback__modal").classList.add("disable");
});
buttonCallBack.addEventListener("click", () => {
  document.querySelector(".call__modal").classList.add("disable");
});

function toggleBurger() {
  const burger = document.querySelector(".burger");
  burger.classList.toggle("burger_active");
  const body = document.querySelector("body");
  body.classList.toggle("lock");
}
