$(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {

        // $('#logoName').show();
        // $('#logoK').show();
  		$('#nav').css('background-color' , 'rgba(225,225,225,0.5)');
    }
    else {
        // $('#logoName').hide();
        // $('#logoK').hide();
        $('#nav').css('background-color' , 'rgba(225,225,225,0)');
    }
});

// PRELOADER

// jQuery(window).on('load',function() {

// jQuery("#status").delay(300).fadeOut("slow");   

// jQuery("#preloader").delay(300).fadeOut("slow");



// });
// Toggle Nav Mobile
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

// Nav

// $(window).scroll(function() {
//     if ($(window).scrollTop() =< 50) {
//         $('#logoName').css('visibility' , 'visible');
//         $('#logoK').css('visibility' , 'visible');
//     }
//     else {
//         $('#logoName').css('visibility' , 'hidden');
//         $('#logoK').css('visibility' , 'hidden');
//     }
// });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
