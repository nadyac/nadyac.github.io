'use strict';

/* jasmine spec for nadyaController */
describe('Nadya\'s Controller', function(){
    
    describe('nadyaCtrl', function(){
        
        beforeEach(module('myApp'));
        it('should create proj list with 3 projects', inject(function($controller){
            var scope ={},
                ctrl = $controller('nadyaCtrl', {$scope:scope});
            expect(scope.projects.length.toBe(3);
        }));
    });
});