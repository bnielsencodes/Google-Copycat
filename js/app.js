const search = document.getElementById("search-input");
const dropdownHide = document.getElementById("dropdown-hide");
const dropdown = document.querySelector(".dropdown");
const searchBar = document.querySelector(".search-bar");
const modalGrid = document.getElementById("modal-grid");
const topScrollBorder = document.querySelector(".top-scroll-border");


/* ----------------- SEARCH DROPDOWN LIST ----------------- */

search.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  searchBar.classList.toggle("search-border-radius");
  dropdownHide.classList.toggle("hidden");
  search.classList.toggle("search-padding-top");
});

/* ----------------- MODAL HIDE/SHOW ----------------- */








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