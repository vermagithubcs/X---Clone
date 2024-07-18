let searchBar = document.querySelector(".search-bar input");
let body = document.querySelector('body');
let spanBar = document.querySelector(".search-bar span");
let logoBtn = document.querySelector(".logo-btn");
searchBar.addEventListener("click", () => {
    searchBar.style.border = "1px solid blue";
    spanBar.style.color = "blue";
});
