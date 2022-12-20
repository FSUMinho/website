/* TEAM'S YEARS IN BUSINESS */

function getYears()
{
    var years = document.getElementById("years");
    var currentDate = new Date;
    var Currentyear = currentDate.getFullYear();
    var yearsInBusiness = Currentyear - 2020;
    years.innerHTML = yearsInBusiness;
}
getYears();

/* NEWS SLIDER */

$(document).ready(function(){
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    pauseOnHover: true,
    responsive: 
    [
      {
      breakpoint: 1400,
      settings: { slidesToShow: 2 }
      },

      {
      breakpoint: 500,
      settings: { slidesToShow: 1 }
      }
    ]  
  });
}); 

/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}