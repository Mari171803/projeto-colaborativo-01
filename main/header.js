const menuHamburger = document.getElementById("menu-hamburger");
const menu = document.getElementById("links-header");
menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("close");
  menu.classList.toggle("expand");
});
