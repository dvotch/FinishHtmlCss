function seeMoreBrands(button, see) {
  alert("ffe");
  if (button.textContent !== "Скрыть") {
    button.textContent = "Скрыть";
    button.textContent = "Показать все";
    for (let i = 8; i < see.length; i++) {
      see[i].classList.add("item_disabled");
    }
  } else {
    for (let i = 8; i < see.length; i++) {
      see[i].classList.remove("item_disabled");
    }
    button.textContent = "Показать все";
  }
}

const brandsBtn = document.querySelector("#brandsButton");
const brandItems = document.querySelectorAll(".brands__item");

brandsBtn.addEventListener("click", () => seeMoreBrands(brandsBtn, brandItems));

function seeMoreText(button, see) {
  alert("ffe");
  if (button.textContent !== "Скрыть") {
    see.style.height = "auto";
    button.textContent = "Скрыть";
  } else {
    if (window.matchMedia("(max-width: 320px)").matches) {
      see.style.height = "90px";
    } else {
      see.style.height = "160px";
    }
    button.textContent = "Читать далее";
  }
}

const servicesButton = document.querySelector("#servicesReadMore");
const servicesText = document.querySelector("#servicesText");

servicesButton.addEventListener("click", () =>
  seeMoreText(servicesButton, servicesText)
);

const kindsBtn = document.querySelector("#kindsButton");
const kindsItms = document.querySelectorAll(".kinds__item");
kindsBtn.addEventListener("click", () => seeMoreKinds(kindsBtn, kindsItms));

function seeMoreKinds(button, see) {
  if (button.textContent != "Скрыть") {
    button.textContent = "Скрыть";
    for (let i = 10; i < see.length; i++)
      see[i].classList.remove("kinds__item_disabled");
  } else {
    button.textContent = "Показать все";
    for (let i = 3; i < see.length; i++)
      see[i].classList.add("kinds__item_disabled");
  }
}
