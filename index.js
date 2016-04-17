
$(document).ready(function(){

	// SMOOTH SCROLL TO PAGES
	$('a[href*=#]:not([href=#])').click(function(e) {
		var hash = $(this).attr('href').match(/#(\w+)/)[1];
		if ($('#' + hash).length) {
			//alert('#' + hash + ' found');
			e.preventDefault();
			e.stopPropagation();
			$( $('#' + hash) ).velocity("scroll", {
			  duration: 800,
			  easing: "easeOutCubic"
			});
		}
	});

	// PARALLAX PAGE PACKGROUNDS

	if ($(window).width() >= 1170) {
		$('#section_home').parallax("50%", 0.5);
		$('#section_contact').parallax("50%", 0.1, true);
				$('#section_22255').parallax("50%", 0.1, true);
						$('#section_22257').parallax("50%", 0.1, true);
					}



		
	// MOBILE MENU TOGGLE
	$('#mobile_menu_toggle').click(function(e){
		e.preventDefault();
		if ($('#mobile_nav').is(':hidden')) {
			$('#mobile_nav').velocity("slideDown", { duration: 200, easing: "easeOutCubic" });
		}
		else {
			$('#mobile_nav').velocity("slideUp", { duration: 200, easing: "easeOutCubic" });
		}
	});
	$('#mobile_nav a').click(function(e){
		if ($('#mobile_nav').is(':visible')) {
			$('#mobile_nav').velocity("slideUp", { duration: 200, easing: "easeOutCubic" });
		}
		return;
	});




	

			
});







