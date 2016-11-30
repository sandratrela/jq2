$(function(){
	var carouselList = $("#carousel ul");

	setInterval(changeSlides, 3000);

	var changeSlides = carouselList.animate({'marginLeft':-440}, 500, moveFirstSlide);
	
	function moveFirstSlide(){

		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({'marginLeft':0});
	};
});