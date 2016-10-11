'use strict';

var myApp = angular.module('myApp', []);

myApp.factory('hexafy', function(){
    var hexafy;
    return hexafy;
});
myApp.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

myApp.controller('funCtrl', function($scope, $window, hexafy) {
    $scope.hex = hexafy.myFunc(255);
    var factor = 1;
    /**
    * Functions
    */
    /* Apply scaling factor to hex edges and vertices*/
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
    
    /* set the dimensions of the div containing the hex */
    var hexDimensions = function(factor){
        var h = factor*150;
        return h;
    }
    /**
    * Scope data
    */
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
    $scope.HexInfo = [
            {'id': ['hex10','hex11','hex12','hex13'],
             'width': [scale(factor), scale(1.5), scale(.6), scale(.4)],
             'height': [hexDimensions(factor), hexDimensions(1.2), hexDimensions(0.8), hexDimensions(0.7)],
             'postion':''
            }
    ];
    /* hex0 */
    factor = 1.25;
    $scope.hexPoints0= scale(factor); //change factor to modify hex dims 
    $scope.hexDim0 = hexDimensions(factor);
    /* hex1 */
    factor = 1;
    $scope.hexPoints1 = scale(factor); 
    $scope.hexDim1 = hexDimensions(factor);    
    /* hex2 */
    factor = 0.85;
    $scope.hexPoints2 = scale(factor);
    $scope.hexDim2 = hexDimensions(factor);
    /* hex3 */
    factor = 0.46
    $scope.hexPoints3 = scale(factor);
    $scope.hexDim3 = hexDimensions(factor);
    
});