var clicked = false;
var xyCoords;
var intervalCall;
var id;

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

function changeXYPos(elemID){ 
	id = elemID;
	setClicked();
	if(clicked === true && typeof xyCoords != 'undefined' && xyCoords.length > 0){
		setIntervalCaller();
	} else if(clicked === false){
		clearInterval(intervalCall);
	}
}

function getCoordinates(){
	var x = event.clientX;
    var y = event.clientY;
    return [x,y];
}

//calculate window height and width to determine center point
function getWindowHeight(){
    var height = window.innerHeight;
    console.log("window height: " + height);
    return height/2;
} 
function getWindowWidth(){
    var width = window.innerWidth;
    console.log("window width: " + width);
    return width/2;
}

function getCenterOfWindow(){
	var center = [getWindowWidth(), getWindowHeight()];
	return center;
}
