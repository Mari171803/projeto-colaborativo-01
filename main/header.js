const menuHamburger = document.getElementById("menu-hamburger");
const menu = document.getElementById("links-header");
const links = document.querySelectorAll(".link-header");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("close");
  menu.classList.toggle("expand");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("expand");
    menuHamburger.classList.toggle("close");
  });
});
