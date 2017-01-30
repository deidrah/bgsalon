$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay: true,
	});

	$(".rozwin").click (function(){
		$(this).parent().find(".line").toggleClass("hidden");
		$(this).toggleClass("open");
	});

	var gdansk = {lat: 54.349853, lng: 18.647186};
	var mapa = new google.maps.Map(document.getElementById('col-2'), {
		zoom: 16,
		center: gdansk
	});

	var marker = new google.maps.Marker({
		position: gdansk,
		map: mapa,
	});
});