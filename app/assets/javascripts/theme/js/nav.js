$( function() {	
	// menu
	var pull 	= $('.collapse-button');
	menu 		= $('#mainNav > .nav-container');
	menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$("#mainNav ul.menu li").on('click', function(e) {
		$(this).toggleClass("hover");
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 ) {
			menu.removeAttr('style');
			$("#mainNav ul.menu li").removeClass("hover");
		}
	});
}); 
