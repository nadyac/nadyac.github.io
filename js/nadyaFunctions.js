var clicked = false;
var xyCoords;
var intervalCall;
var id;
/* delete this when done */
function showCoords() {
    xyCoords = getCoordinates();
    var coords = "X coords: " + xyCoords[0] + ", Y coords: " + xyCoords[1];
    document.getElementById("coordinates").innerHTML = coords;
}

function setClicked(){
	if(clicked === false){
		clicked = true;
	} else{
		clicked = false;
	}
}
/* move the orbs with the mouse pointer*/
function setIntervalCaller(){
	intervalCall = setInterval(function(){
		var mouseX = xyCoords[0]-300;
		var mouseY = xyCoords[1]-300;
		if(typeof id != 'undefined' && id != null){
			document.getElementById(id).style.cx = mouseX+300;
			document.getElementById(id).style.cy = mouseY+300;
		} 
		var elemX = document.getElementById(id).getAttribute("cx");
		var elemY = document.getElementById(id).getAttribute("cy");
		var coords = "elemX: " + elemX + ", elemY: " + elemY;
		document.getElementById("coordinatesTwo").innerHTML = coords;
	}, 0.5);
}
/* move orbs when user clicks on them, otherwise, make them still */
function changeXYPos(elemID){ 
	id = elemID;
	setClicked();
	if(clicked === true && typeof xyCoords != 'undefined' && xyCoords.length > 0){
		setIntervalCaller();
	} else if(clicked === false){
		clearInterval(intervalCall);
	}
}
/* get mouse pointer coordinates */
function getCoordinates(){
	var x = event.clientX;
    var y = event.clientY;
    return [x,y];
}

//calculate window height and width to determine center point
function getCenterOfWindow(){
	var center = [window.innerWidth/2, window.innerHeight/2];
	return center;
}

window.addEventListener('DOMContentLoaded', function(){
	var center = getCenterOfWindow();
	var circles = document.getElementsByClassName("circles");
	var i = 0;
	for(;i < circles.length; i++){
		circles[i].style.cx = center[0];
		circles[i].style.cy = center[1];
	}
});

/**
* -------------------------------------------
* functions for creating the stars
* -------------------------------------------
*/