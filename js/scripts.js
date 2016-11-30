$(function() {
	var carouselList = $("#carousel ul");

	setInterval(changeSlides, 3000);

	function changeSlides() {
		carouselList.animate({
			'marginLeft': '-400px'
		}, 500, moveFirstSlide);
	}
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({'marginLeft': 0});
	};
});