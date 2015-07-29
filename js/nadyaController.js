'use strict';
var myApp = angular.module('myApp', []);

myApp.controller('nadyaCtrl', function($scope, $window) {
    
    $scope.projects = [
            {'name': 'CFC',
             'blurb': 'Classifier for anime episodes on Crunchyroll',
             'keywords': 'Python, Flask, HTML/CSS, classification'},
            {'name': 'Dynamic Wumpus World',
             'blurb': 'Multi-agent twist on 1960s text-based game.',
             'keywords': 'Processing, Search algorithms'},
            {'name': 'recommendr',
             'blurb':'Simple recommendation system using FB API',
             'keywords': 'API, JavaScript, HTML/CSS'}
        ];
    
    //Apply scaling factor to svg points
    var scale = function(s){
        var x0 = s*150;
        var x1 = s*75 
        var x2 = s*112.5;
        var x3 = s*140;
        var x4 = s*37.5;
        var x5 = s*140; 
        var x6 = 0;
        var x7 = s*75;
        var x8 = s*37.5;
        var x9 = s*10;
        var x10 = s*112.5;
        var x11 = s*10;

        var scaledPts = String(x0)+","+String(x1)+" "+String(x2)+","+String(x3)+" "+String(x4)+","+String(x5)+" "+String(x6)+","+String(x7)+" "+String(x8)+","+String(x9)+" "+String(x10)+","+String(x11);
        return scaledPts;
    }
    
    //set the dimensions of the div containing the hex
    var hexDimensions = function(factor){
        var h = factor*150;
        return h;
    }
    //hex0
    var factor = 1.25;
    $scope.hexPoints0= scale(factor); //change factor to modify hex dims 
    $scope.hexDim0 = hexDimensions(factor);
    //hex1
    var factor = 1;
    $scope.hexPoints1 = scale(factor); 
    $scope.hexDim1 = hexDimensions(factor);    
    //hex2
    var factor = 0.85;
    $scope.hexPoints2 = scale(factor);
    $scope.hexDim2 = hexDimensions(factor);
    //hex3
    var factor = 0.55;
    $scope.hexPoints3 = scale(factor);
    $scope.hexDim3 = hexDimensions(factor);
    //hex4
    
    
    //dynamically calculate scale factor so the bigHex covers entire window
    function getWindowHeight(){
        var height = window.innerHeight;
        console.log("window height: " + height);
        return height;
    }
    
    function getWindowWidth(){
        var width = window.innerWidth;
        console.log("window width: " + width);
        return width;
    }

    var calcPath = function(){
        var height = getWindowHeight(); 
        var width = getWindowWidth();
        var width2 = width + 67;
        var shape = "M490,0 L0, 890 L890,"+width+" L"+width+","+width2+" L"+width2+", 0";

        return shape;
    }
    
    $scope.shape = calcPath();  
    
    var w = angular.element($window);
    w.bind('resize', function(){
        console.log('resize ***********');
        $scope.$apply(function(){
            $scope.shape = calcPath();  
        });
    });
    
});
