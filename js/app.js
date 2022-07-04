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
const miniGoogleOne = document.querySelector(".mini-google-container-one");
const miniGoogleTwo = document.querySelector(".mini-google-container-two");
const userSVG = document.querySelector(".user-svg");
const earthSVG = document.querySelector(".earth-svg");
const dotSVGOne = document.getElementById("dot-svg-one-active");
const dotSVGTwo = document.getElementById("dot-svg-two-active");
const miniGooglePageOne = document.querySelector(
  ".shortcut-mini-google-page-one"
);
const miniGooglePagetwo = document.querySelector(
  ".shortcut-mini-google-page-two"
);
const checkedIconOne = document.querySelector(".checked-icon-container-one");
const checkedIconTwo = document.querySelector(".checked-icon-container-two");
const hideShortcutsToggle = document.getElementById("hide-shortcuts-toggle");
const hideToggleSection = document.querySelector(".hide-toggle-section");
const shortcutsH4 = document.querySelector(".shortcuts-h4");
const shortcutsP = document.querySelector(".shortcuts-p");
const eyeSlash = document.querySelector(".fa-eye-slash");
const hideTopWebsites = document.getElementById("hide-top-websites");
const modalCancel = document.querySelector(".modal-cancel");
const hideCardsToggle = document.getElementById("modal-cards-radio-one");
const customizeToggle = document.getElementById("modal-cards-radio-two");
const recipeIdeasToggle = document.getElementById("recipe-ideas-toggle");
const yourCartsToggle = document.getElementById("your-carts-toggle");
const cardsBottomToggle = document.getElementById(
  "cards-bottom-toggle-container"
);
const cardsMiddleToggleBottomBorder = document.getElementById(
  "cards-middle-toggle-container"
);

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
  customModal.classList.remove("hide");
  modalGrid.classList.remove("hide");
  modalListItemOne.classList.add("modal-list-item-active");
  modalShortcuts.classList.add("hide");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.add("hide");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.add("hide");
  modalListItemFour.classList.remove("modal-list-item-active");
});

// hide modal when cancel button is clicked

document.querySelectorAll(".modal-buttons").forEach((item) => {
  item.addEventListener("click", () => {
    customModal.classList.add("hide");
  });
});

modalCancel.addEventListener("click", () => {
  if (hideShortcutsToggle.hasAttribute("checked")) {
    return;
  } else {
    hideTopWebsites.classList.remove("hide");
  }
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

/* ----------------- SHOW MODAL GRID AND ADD ACTIVE STYLING ----------------- */

modalListItemOne.addEventListener("click", () => {
  modalGrid.classList.remove("hide");
  modalListItemOne.classList.add("modal-list-item-active");
  modalShortcuts.classList.add("hide");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.add("hide");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.add("hide");
  modalListItemFour.classList.remove("modal-list-item-active");
});

/* ----------------- SHOW SHORTCUTS AND ADD ACTIVE STYLING ----------------- */

modalListItemTwo.addEventListener("click", () => {
  modalGrid.classList.add("hide");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.remove("hide");
  modalListItemTwo.classList.add("modal-list-item-active");
  modalCards.classList.add("hide");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.add("hide");
  modalListItemFour.classList.remove("modal-list-item-active");
});

/* ----------------- ADD AND REMOVE ACTIVE STYLING FOR MODAL SHORTCUTS MINI GOOGLE CONTAINER ONE ----------------- */

miniGoogleOne.addEventListener("click", () => {
  miniGoogleOne.classList.add("mini-google-container-active");
  miniGoogleTwo.classList.remove("mini-google-container-active");
  userSVG.classList.add("svg-active");
  earthSVG.classList.remove("svg-active");
  dotSVGOne.classList.add("svg-active");
  dotSVGTwo.classList.remove("svg-active");
  miniGooglePageOne.classList.remove("not-active-border");
  miniGooglePagetwo.classList.add("not-active-border");
  checkedIconOne.classList.remove("hide");
  checkedIconTwo.classList.add("hide");
  hideToggleSection.classList.remove("hide-section-bg-border-active");
  shortcutsH4.classList.remove("shortcuts-text-active");
  shortcutsP.classList.remove("shortcuts-text-active");
  eyeSlash.classList.remove("eye-slash-active");
  hideShortcutsToggle.checked = false;
  hideTopWebsites.classList.remove("hide");
});

/* ----------------- ADD AND REMOVE ACTIVE STYLING FOR MODAL SHORTCUTS MINI GOOGLE CONTAINER TWO ----------------- */

miniGoogleTwo.addEventListener("click", () => {
  miniGoogleOne.classList.remove("mini-google-container-active");
  miniGoogleTwo.classList.add("mini-google-container-active");
  userSVG.classList.remove("svg-active");
  earthSVG.classList.add("svg-active");
  dotSVGOne.classList.remove("svg-active");
  dotSVGTwo.classList.add("svg-active");
  miniGooglePageOne.classList.add("not-active-border");
  miniGooglePagetwo.classList.remove("not-active-border");
  checkedIconOne.classList.add("hide");
  checkedIconTwo.classList.remove("hide");
  hideToggleSection.classList.remove("hide-section-bg-border-active");
  shortcutsH4.classList.remove("shortcuts-text-active");
  shortcutsP.classList.remove("shortcuts-text-active");
  eyeSlash.classList.remove("eye-slash-active");
  hideShortcutsToggle.checked = false;
  hideTopWebsites.classList.remove("hide");
});

/* ----------------- HIDE/SHOW SHORTCUTS AND ADD ACTIVE STYLING TO CUSTOMIZE MODAL SHORTSCUTS HIDE SECTION ----------------- */

hideShortcutsToggle.addEventListener("click", () => {
  hideTopWebsites.classList.toggle("hide");
  hideShortcutsToggle.toggleAttribute("checked");
  hideToggleSection.classList.toggle("hide-section-bg-border-active");
  shortcutsH4.classList.toggle("shortcuts-text-active");
  shortcutsP.classList.toggle("shortcuts-text-active");
  eyeSlash.classList.toggle("eye-slash-active");
  miniGoogleOne.classList.toggle("mini-google-container-active");
  userSVG.classList.toggle("svg-active");
  dotSVGOne.classList.toggle("svg-active");
  miniGooglePageOne.classList.toggle("not-active-border");
  checkedIconOne.classList.toggle("hide");
  // change styling when .hideShortCutsToggle has attribute checked
  if (hideShortcutsToggle.hasAttribute("checked")) {
    miniGoogleOne.classList.remove("mini-google-container-active");
    miniGoogleTwo.classList.remove("mini-google-container-active");
    userSVG.classList.remove("svg-active");
    earthSVG.classList.remove("svg-active");
    dotSVGOne.classList.remove("svg-active");
    dotSVGTwo.classList.remove("svg-active");
    miniGooglePageOne.classList.add("not-active-border");
    miniGooglePageTwo.classList.add("not-active-border");
    checkedIconOne.classList.add("hide");
    checkedIconTwo.classList.add("hide");
  } else {
    checkedIconOne.classList.remove("hide");
  }
});

/* ----------------- SHOW CARDS AND ADD ACTIVE STYLING ----------------- */

modalListItemThree.addEventListener("click", () => {
  modalGrid.classList.add("hide");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.add("hide");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.remove("hide");
  modalListItemThree.classList.add("modal-list-item-active");
  modalColorTheme.classList.add("hide");
  modalListItemFour.classList.remove("modal-list-item-active");
});

// uncheck toggles, hide bottom toggle, and add middle toggle bottom border
hideCardsToggle.addEventListener("click", () => {
  recipeIdeasToggle.checked = false;
  yourCartsToggle.checked = false;
  recipeIdeasToggle.disabled = true;
  yourCartsToggle.disabled = true;
  cardsBottomToggle.classList.add("hide");
  cardsMiddleToggleBottomBorder.classList.add(
    "cards-middle-toggle-bottom-border"
  );
});

// check toggles, show bottom toggle, and remove middle toggle bottom border
customizeToggle.addEventListener("click", () => {
  recipeIdeasToggle.checked = true;
  yourCartsToggle.checked = true;
  recipeIdeasToggle.disabled = false;
  yourCartsToggle.disabled = false;
  cardsBottomToggle.classList.remove("hide");
  cardsMiddleToggleBottomBorder.classList.remove(
    "cards-middle-toggle-bottom-border"
  );
});

/* ----------------- SHOW COLOR THEMES AND ADD ACTIVE STYLING ----------------- */

modalListItemFour.addEventListener("click", () => {
  modalGrid.classList.add("hide");
  modalListItemOne.classList.remove("modal-list-item-active");
  modalShortcuts.classList.add("hide");
  modalListItemTwo.classList.remove("modal-list-item-active");
  modalCards.classList.add("hide");
  modalListItemThree.classList.remove("modal-list-item-active");
  modalColorTheme.classList.remove("hide");
  modalListItemFour.classList.add("modal-list-item-active");
});

/* ---------------- x dropdown list ---------------*/

// const searchX = document.querySelectorAll(".search-x");

// searchX.innerHTML =
//   `
//   <p>x</p>
//   `;
