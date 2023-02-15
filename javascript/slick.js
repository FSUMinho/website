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
        breakpoint: 800,
        settings: { slidesToShow: 2 }
        },
  
        {
        breakpoint: 500,
        settings: { slidesToShow: 1 }
        }
      ]  
    });
  });