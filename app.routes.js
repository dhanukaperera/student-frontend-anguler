/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use strict`;
/*const app = angular.module("studentApp",["ngRoute"]);*/
angular.module('studentApp').config(function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl:"views/student.html",
            controller:'studentController'
        })
        .when("/courses",{
            templateUrl:"views/course.html",
            controller:'courseController'
        })
        .otherwise({
            templateUrl:"index.html"
        });
});