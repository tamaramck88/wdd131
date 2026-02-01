// Footer Dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});
