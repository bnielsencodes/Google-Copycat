const search = document.getElementById("search-input");
const dropdownHide = document.getElementById("dropdown-hide");
const dropdown = document.querySelector(".dropdown");
const searchBar = document.querySelector(".search-bar");
const topScrollBorder = document.querySelector(".top-scroll-border");
const customModal = document.querySelector(".customize-overlay");
const customButton = document.getElementById("customize-button");
const modalListItemOne = document.querySelector(".modal-list-item-one");
const modalListItemTwo = document.querySelector(".modal-list-item-two");
const modalListItemThree = document.querySelector(".modal-list-item-three");
const modalListItemFour = document.querySelector(".modal-list-item-four");
const modalGrid = document.querySelector(".modal-grid-container");
const modalShortcuts = document.querySelector(".modal-shortcuts-container");
const modalCards = document.getElementById("modal-cards-section");
const modalColorTheme = document.getElementById("hide-color-theme");

/* ----------------- SEARCH DROPDOWN LIST ----------------- */

search.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  searchBar.classList.toggle("search-border-radius");
  dropdownHide.classList.toggle("hidden");
  search.classList.toggle("search-padding-top");
});

/* ----------------- MODAL HIDE/SHOW ----------------- */

// show modal when .customize-button is clicked
customButton.addEventListener("click", () => {
  customModal.classList.remove("hidden-modal");
});

// hide modal when cancel button is clicked

document.querySelectorAll(".modal-buttons").forEach((item) => {
  item.addEventListener("click", () => {
    customModal.classList.add("hidden-modal");
  });
});

/* ----------------- SHOW MODAL GRID AND ADD ACTIVE STYLING ----------------- */

modalListItemOne.addEventListener("click", () => {
  modalGrid.classList.remove("hide-modal-grid");
  modalListItemOne.classList.add("modal-list-item-active");
  modalShortcuts.classList.add("hide-shortcuts");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.add("hide-cards");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.add("hide-color-theme");
  modalListItemFour.classList.remove("modal-list-item-active");
});

/* ----------------- SHOW SHORTCUTS AND ADD ACTIVE STYLING ----------------- */

modalListItemTwo.addEventListener("click", () => {
  modalGrid.classList.add("hide-modal-grid");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.remove("hide-shortcuts");
  modalListItemTwo.classList.add("modal-list-item-active");
  modalCards.classList.add("hide-cards");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.add("hide-color-theme");
  modalListItemFour.classList.remove("modal-list-item-active");
});

/* ----------------- SHOW CARDS AND ADD ACTIVE STYLING ----------------- */

modalListItemThree.addEventListener("click", () => {
  modalGrid.classList.add("hide-modal-grid");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.add("hide-shortcuts");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.remove("hide-cards");
  modalListItemThree.classList.add("modal-list-item-active");
  modalColorTheme.classList.add("hide-color-theme");
  modalListItemFour.classList.remove("modal-list-item-active");
});

/* ----------------- SHOW COLOR THEMES AND ADD ACTIVE STYLING ----------------- */

modalListItemFour.addEventListener("click", () => {
  modalGrid.classList.add("hide-modal-grid");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.add("hide-shortcuts");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.add("hide-cards");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.remove("hide-color-theme");
  modalListItemFour.classList.add("modal-list-item-active");
});

/* ----------------- TOGGLE MODAL CENTER CONTAINER TOP BORDER ----------------- */

modalGrid.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (modalGrid.scrollTop > 0) {
    topScrollBorder.className = "top-scroll-border show-2";
  } else {
    topScrollBorder.className = "top-scroll-border";
  }
}

/* ---------------- x dropdown list ---------------*/

// const searchX = document.querySelectorAll(".search-x");

// searchX.innerHTML =
//   `
//   <p>x</p>
//   `;
