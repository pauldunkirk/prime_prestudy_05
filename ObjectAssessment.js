//pre-study week 5 assignment
var avengersMovie = {
	name: "Avengers",
	runtimeInMins: 143,
	releaseYear: 2012,
	director: "Joss Whedon",
	actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Cobie Smulders", "Stellan Skarsgård", "Samuel L Jackson"]
};
 //I added click requirement and some images and CSS just for fun and practice
var clicked = function () {
		console.log(avengersMovie);



//below is just goofing around making a timed slideShow
// Because this is after the clicked function, it only starts AFTER button is clicked
// so I changed the text on the button
var myImage = document.getElementById("slideShow"); //grabbing "slidSehow" from HTML
var imageArray = ["Avengers2.jpg", "Avengers3.jpg", "Avengers4.jpg", "Avengers5.jpg", "Avengers6.jpg", "Avengers1.jpg"]; //array of images
//below is loop to change the "src" attribute of myImage(was slideShow) with contents of imageArray
// when i incrememnts beyond 3 (length of the array) then it will reset to 0
var i=0;
function changeImage() {
		myImage.setAttribute("src", imageArray[i]);
		i++;
		if (i >= imageArray.length){
			i=0;
		}
}
//change image every 2 seconds
var intervalHandle = setInterval(changeImage,2500);
//click image again to stop or clear the slideshow or setInterval
myImage.onclick = function(){
	clearInterval(intervalHandle);
}
}; //I'm not sure why, but if I delete this curly brace, the whole thing doesn't work
//It's not about the semi-colon: if I delete that, it still works... hmm....
//also, var clicked above is missing a curly brace and if I put this one there, the stuff below it stops working

// trying a little jQuery
//$(document).ready(function(){
    //$(".myButton").click(function(){
    //    $("#div").animate({
            //left: '250px',
            //height: '+=50px',
            //width: '+=100px'
  //      });
//    });
// });
