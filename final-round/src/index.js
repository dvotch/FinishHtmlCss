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
