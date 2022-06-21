const search = document.getElementById("search-input");
const notification = document.getElementById("notifications");
const dropdown = document.querySelector(".notifications-dropdown");
const searchbar = document.querySelector(".search-bar");

search.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  searchbar.classList.toggle("searchbar-border-radius");
  notification.classList.toggle("hidden");
  search.classList.toggle("search-padding-top");
});





// const searchX = document.querySelectorAll(".search-x");

// searchX.innerHTML =
//   `
//   <p>x</p>
//   `;