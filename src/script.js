const feature = document.querySelector(".features");
const company = document.querySelector(".company");

const dropDownOne = document.querySelector(".dropdown-1");
const dropDownTwo = document.querySelector(".dropdown-2");

function showMenu(event) {
  if (event.target.classList.contains("features")) {
    dropDownOne.classList.add("activate");
  }

  if (event.target.classList.contains("company")) {
    dropDownTwo.classList.add("activate");
  }
}

function finishMenu(event) {
  if (event.target.classList.contains("features")) {
    dropDownOne.classList.remove("activate");
  }

  if (event.target.classList.contains("company")) {
    dropDownTwo.classList.remove("activate");
  }
}

feature.addEventListener("mouseover", showMenu);
company.addEventListener("mouseover", showMenu);

feature.addEventListener("mouseout", finishMenu);
company.addEventListener("mouseout", finishMenu);
