/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

var navelements = document.querySelectorAll(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLink = document.querySelector(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}