var clicked = false;
var xyCoords;
var id;

function showCoords(event) {
    xyCoords = getCoordsNoEvent();
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
function changeXYPos(elemID){ 
	setClicked();
	if(clicked === true && typeof xyCoords != 'undefined' && xyCoords.length > 0){
		id = elemID;
		setInterval(function(){
			var mouseX = xyCoords[0]-300;
			var mouseY = xyCoords[1]-300;
			if(typeof id != 'undefined' && id != null){
				document.getElementById(id).setAttribute("cx", mouseX);
				document.getElementById(id).setAttribute("cy", mouseY);
			} 
			var elemX = document.getElementById(id).getAttribute("cx");
			var elemY = document.getElementById(id).getAttribute("cy");
			var coords = "elemX: " + elemX + ", elemY: " + elemY;
			document.getElementById("coordinatesTwo").innerHTML = coords;
		}, 0.5);
	}
}

function getCoordsWithEvent(event){
	var x = event.clientX;
    var y = event.clientY;
    return [x,y];
}
function getCoordsNoEvent(){
	var x = event.clientX;
    var y = event.clientY;
    return [x,y];
}
