var app = angular.module('myApp',['ngRoute']);


app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

app.config(function($routeProvider) {

  $routeProvider.when('/home',{
    templateUrl: '/partials/home.html'
  })
  .when('/projects',{
    templateUrl: '/partials/projects.html'
  })
  .when('/contact', {
    templateUrl: '/partials/contact.html'
  })
  .otherwise({
    redirectTo:'/home'});
});

if (window.location.hash === '#_=_') window.location.hash = '#!';
