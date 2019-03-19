$("body").on("click", ".start-btn,.steps-btn", function (e) { //This means everytime the body gets clicked on CHECK! If its the start or steps button do the same function
	e.preventDefault(); //This is used so we dont get weird behavior in old browsers
	const myPath = $(this), //When this button is clicked
		mySlide = myPath.data('id'), //Grad id info in the data attribute data-id
		mySlideBackground = mySlide + "-background", //Changes the background id--  takes myslide background “my slide” plus background
		mySlideColor = myPath.data('color'); //Grabs the color in data attributed data-color
	console.log(mySlide);
	console.log(mySlideBackground);
	console.log(mySlideColor); //
	$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor);
	$("#" + mySlide).addClass('active').css("background-color", mySlideColor);
	$('html, body').animate({ //# combined with the words is needed to add the id that can found in the index. THESE TWO CAN BE SIMPLIFIED -- $(‘#${MYSLIDEBACKGROUND}, #${MYSLIDE}’).ADDCLASS(‘ACTIVE’).CSS(“BACKGROUND-COLOR”, MYSLIDECOLOR);
		scrollTop: $("#" + mySlideBackground).offset().top //grabs slide id and scrolls
	}, 400); //400 is standard, the bigger the number the slower the scroll.
});
$("body").on("click", ".restart-btn", function (e) {
	e.preventDefault(); //have to add so wont get weird behavior
	$(".hide").removeClass('active'); //hides all the divs that were visible
	scrollyUp(); //see function below to scroll
});
//function that scrolls back up when .restart-btn is clicked
function scrollyUp() {
	$("html,body").animate({
		scrollTop: $(".intro").offset().top + "px"
	});
}