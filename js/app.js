$(document).ready(function() {
			$('#fullpage').fullpage({
				// anchors: ['landingSec', 'bioSec', 'portfolioSec', 'contactSec'],
				// // sectionsColor: ['#DAC500', '#1BBC9B', '#7E8F7C'],
				// menu: '#menu',
				// navigation: false,
				// navigationPosition: 'right',
				// navigationTooltips: ['Home', 'About', 'Portfolio' , 'Contact'],
				responsiveWidth: 1100
				



			


			
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

// jQuery(window).on('load',function() {
       
//    jQuery("#status").delay(300).fadeOut("slow");   

//    jQuery("#preloader").delay(300).fadeOut("slow");

// });

var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;





function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
            }
        }

        function getFullpageData(){
            return {
                options: options,
                internals: {
                    getXmovement: getXmovement,
                    removeAnimation: removeAnimation,
                    getTransforms: getTransforms,
                    lazyLoad: lazyLoad,
                    addAnimation: addAnimation,
                    performHorizontalMove: performHorizontalMove,
                    silentLandscapeScroll: silentLandscapeScroll,
                    keepSlidesPosition: keepSlidesPosition,
                    silentScroll: silentScroll,
                    styleSlides: styleSlides
                }
            };
        }

        if($(this).length){
            //public functions
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = getFullpageData;
            FP.destroy = destroy;

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();

            prepareDom();
            setAllowScrolling(true);

            setAutoScrolling(options.autoScrolling, 'internal');


             .resize(resizeHandler);



             /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        // function responsive(){
        //     var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
        //     var heightLimit = options.responsiveHeight;

        //     //only calculating what we need. Remember its called on the resize event.
        //     var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
        //     var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

        //     if(widthLimit && heightLimit){
        //         setResponsive(isBreakingPointWidth || isBreakingPointHeight);
        //     }
        //     else if(widthLimit){
        //         setResponsive(isBreakingPointWidth);
        //     }
        //     else if(heightLimit){
        //         setResponsive(isBreakingPointHeight);
        //     }
        // }


        // function removeTouchHandler(){
        //     if(isTouchDevice || isTouch){
        //         //Microsoft pointers
        //         var MSPointer = getMSPointer();

        //         $(WRAPPER_SEL)
        //             .off('touchstart ' + MSPointer.down)
        //             .off('touchmove ' + MSPointer.move);
        //     }
        // }

