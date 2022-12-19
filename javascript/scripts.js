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
    arrows: true,
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

/* LOADER */