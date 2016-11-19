$(document).ready(function() {
			$('#fullpage').fullpage({
				// anchors: ['landingSec', 'bioSec', 'portfolioSec', 'contactSec'],
				// // sectionsColor: ['#DAC500', '#1BBC9B', '#7E8F7C'],
				// menu: '#menu',
				// navigation: false,
				// navigationPosition: 'right',
				// navigationTooltips: ['Home', 'About', 'Portfolio' , 'Contact'],
                responsiveWidth: 1100,
                // responsiveHeight:750,
                





			


			
			});
		});


// STATUS BARS IN PORTFOLIO SECTION //

$(document).ready(function() {	
	console.log('');

	$('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});
	
	$('html').click(function(){
		$('#examplesList').hide();
	});
});

$(document).ready(function() {
	$('.percentage-bar').each(function(){
		$(this).find('.bar').animate({
			width: $(this).attr('data-percent')
		}, 6000);
	});
});


// INTERACTIVE NAV MENU//

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    }
    );
  }

  var menuOpen = false;

$( "#button" ).click(function() {
	if ( menuOpen ) {
	  $( "#sidebarWrapper" ).hide( "fast" );	
	} else {
	  $( "#sidebarWrapper" ).show( "fast" );	
	}

	menuOpen = !menuOpen;
} );

$( "#sidebarWrapper" ).click(function() {
	if ( menuOpen ) {

		$.fn.fullpage.setAutoScrolling(false)
	  $( "#sidebarWrapper" ).hide( "fast" );	
	} else {
		$.fn.fullpage.setAutoScrolling(false)
	  $( "#sidebarWrapper" ).show( "fast" );	
	}

	menuOpen = !menuOpen;
} );



})();


// PRELOADER

jQuery(window).on('load',function() {
       
   jQuery("#status").delay(300).fadeOut("slow");   

   jQuery("#preloader").delay(300).fadeOut("slow");

});



function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }