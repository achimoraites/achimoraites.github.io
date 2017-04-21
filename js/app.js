var app = angular.module('myApp',['ngRoute']);


app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

app.config(function($routeProvider) {

  $routeProvider.when('/home',{
    templateUrl: '/partials/home.html',
    controller: 'projectsCtrl'
  })
  .when('/projects',{
    templateUrl: '/partials/projects.html'
  })
  .when('/contact', {
    templateUrl: '/partials/contact.html'
  })
  .when('/cv', {
    templateUrl: '/partials/cv.html'
  })
  .otherwise({
    redirectTo:'/home'});
});

if (window.location.hash === '#_=_') window.location.hash = '#!';

// controllers
app.controller('projectsCtrl',['$scope',function($scope){
$scope.myProjects = [
  {
    name: "Weather App",
    img : 'https://raw.githubusercontent.com/Cyb3rN4u7/Open-Weather-Map-Angular-App/master/app/img/weather-app-main.png',
    description: 'A weather forecast Application',
    skills : ' Angular , GoogleMaps api , Open Weather Map api ',
    url: 'https://cyb3rn4u7.github.io/Open-Weather-Map-Angular-App/'

  },
  {
    name: "TwitchTV App",
    img : 'https://raw.githubusercontent.com/Cyb3rN4u7/TwitchTV-Angular-App/master/app/img/project-status.png',
    description: 'A Free Code Camp project , this app gets information from TwitchTV and displays them back to user.',
    skills : ' Angular , TwitchTV ',
    url: 'https://cyb3rn4u7.github.io/TwitchTV-Angular-App/app/'

  },
  {
    name: "Python Image Converter",
    img : 'https://raw.githubusercontent.com/Cyb3rN4u7/Python-Image-Converter/master/app/img/sample.png',
    description: 'Simple Python Image Converter for quick batch conversions of raw images to jpg',
    skills : ' Python, Multithreaded, Console ',
    url: 'https://cyb3rn4u7.github.io/Python-Image-Converter/'

  },
  {
    name: "Wikipedia Viewer",
    img : '/img/projects/wikipedia-viewer.png',
    description: 'Simple Wikipedia Viewer',
    skills : ' Angular, Wikipedia Api ',
    url: 'https://codepen.io/achimoraites/full/dNvjJN/'

  },
  {
    name: "Quote Machine",
    img : '/img/projects/radom_quote_machine.png',
    description: 'Simple radom quote machine',
    skills : ' JQuery, Json, Twitter ',
    url: 'https://codepen.io/achimoraites/full/VPeGZe'

  }
];

}]);
