$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
       
    });

	$(".mobile-menu").click(function(e){
	        e.preventDefault();
	        $(".menu").toggleClass("show");
	        $(this).toggleClass("active");
	    });
});