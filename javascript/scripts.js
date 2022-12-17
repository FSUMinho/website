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

/* SLIDER SCRIPT */

$(document).ready(function($) {
    $('.card-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});