    // PORFOLIO SLIDER

    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="prev-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></i></span>',

    });

    // TESTIMONIAL SLIDER

    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<span class="prev-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></i></span>',

    });

    // RESPONSIVE

    $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    


// BACK TO TOP

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


