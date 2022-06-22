const search = document.getElementById("search-input");
const dropdownHide = document.getElementById("dropdown-hide");
const dropdown = document.querySelector(".dropdown");
const searchBar = document.querySelector(".search-bar");

search.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  searchBar.classList.toggle("search-border-radius");
  dropdownHide.classList.toggle("hidden");
  search.classList.toggle("search-padding-top");
});





// const searchX = document.querySelectorAll(".search-x");

// searchX.innerHTML =
//   `
//   <p>x</p>
//   `;