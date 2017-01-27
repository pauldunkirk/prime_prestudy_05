
//pre-study week 5 assignment
var avengersMovie = {
	name: "Avengers",
	runtimeInMins: 143,
	releaseYear: 2012,
	director: "Joss Whedon"
};
 //I added click requirement and some images and CSS just for fun and practice
var clicked = function () {
		console.log(avengersMovie);



//below is just goofing around, failed attempt at making a timed slideShow
// if you have a second, could you look at why this is not working?
var myImage = document.getElementById("slideShow"); //grabbing "slidSehow" from HTML
var imageArray = ["Avengers2.jpg", "Avengers3.jpg", "Avengers1.jpg"]; //array of images
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
setInterval(changeImage,2000);







};
