var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);


app.config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

app.config(function ($routeProvider) {

  $routeProvider.when('/home', {
      templateUrl: '/partials/home.html',
      controller: 'projectsCtrl'
    })
    .when('/projects', {
      templateUrl: '/partials/projects.html'
    })
    .when('/contact', {
      templateUrl: '/partials/contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

if (window.location.hash === '#_=_') window.location.hash = '#!';

// controllers
app.controller('projectsCtrl', ['$scope', function ($scope) {

  $scope.toggleModal = function (modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

  }
  $scope.closeModal = function(modalId){
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  $scope.myProjects = [{
      id: 0,
      name: "QR Code Scanner",
      img: 'https://raw.githubusercontent.com/Cyb3rN4u7/Cyb3rN4u7.github.io/master/img/projects/qrCodeScanner.png',
      description: 'An android app for scanning QR Codes. After scanning the user can use the information in the code : Contacts, emails, maps, products and more.',
      skills: ' Android , Java , XML , zxing ',
      url: 'https://play.google.com/store/apps/details?id=io.github.cyb3rn4u7.qrcodescanner'

    },
    {
      id: 1,
      name: "Music Master ",
      img: 'https://raw.githubusercontent.com/Cyb3rN4u7/Cyb3rN4u7.github.io/master/img/projects/Music_Master.png',
      description: 'React app that uses the Spotify api to search artists, play songs & recommend Artists based on the user preferences.',
      skills: ' React, JavaScript, Spotify API, HTML/CSS ',
      url: '#'

    },
    {
      id: 2,
      name: "Personality Test",
      img: 'https://raw.githubusercontent.com/Cyb3rN4u7/Cyb3rN4u7.github.io/master/img/projects/personalityTest.png',
      description: 'Application for taking a color personality test made with JQuery, bootstrap and Django in the Back-end. ',
      skills: ' JavaScript, JQuery UI, Bootstrap, Django ',
      url: 'https://afternoon-headland-41285.herokuapp.com/'

    },
    {
      id: 3,
      name: "TwitchTV App",
      img: 'https://raw.githubusercontent.com/Cyb3rN4u7/TwitchTV-Angular-App/master/app/img/project-status.png',
      description: 'A Free Code Camp project , this app gets information from TwitchTV and displays it back to user.',
      skills: ' Angular , TwitchTV ',
      url: 'https://cyb3rn4u7.github.io/TwitchTV-Angular-App/app/'

    },
    {
      id: 4,
      name: "Python Image Converter",
      img: 'https://raw.githubusercontent.com/Cyb3rN4u7/Python-Image-Converter/master/app/img/sample.png',
      description: 'Simple Python Image Converter for quick batch conversions of raw images to jpg',
      skills: ' Python, Multithreaded, Console ',
      url: 'https://cyb3rn4u7.github.io/Python-Image-Converter/'

    },
    {
      id: 5,
      name: "Wikipedia Viewer",
      img: '/img/projects/wikipedia-viewer.png',
      description: 'Simple Wikipedia Viewer, allows the user to search and view articles',
      skills: ' Angular, Wikipedia Api ',
      url: 'https://codepen.io/achimoraites/full/dNvjJN/'

    }
  ];

}]);

// blog feed
app.controller('bloggerCtrl', ['$scope', 'bloggerApi', '$timeout', '$sce', function ($scope, bloggerApi, $timeout, $sce) {
  $scope.numLimit = 3;





  bloggerApi.getBlogPosts()
    .success(function (result) {
      $scope.posts = result.items;
      $scope.content = result.items.content;


    })
    .error(function (error, status) {
      $scope.error = 'Status : ' + status + ' Something went wrong!';

    });



}]);

app.controller('scrollCtrl', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.goToTop = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');



      // call $anchorScroll()
      $anchorScroll();
    };
  }
]);





app.factory('bloggerApi', ['$http', function bloggerApiFactory($http) {
  var apiUrl = 'https://www.googleapis.com/blogger/v3/blogs/7900380589360458141/posts?key=AIzaSyDJZx2Tx3kW65FrvjXonMRSmNap4z7Rw-o&callback=JSON_CALLBACK';


  return {

    getBlogPosts: function () {

      return $http.jsonp(apiUrl);
    }

  };


}]);
app.filter('htmlToPlaintext', function () {
  return function (text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  };
});
app.filter('getTimeEstimate', function () {
  return function (text) {
    // remove html characters
    var content = text ? String(text).replace(/<[^>]+>/gm, '') : '';
    // get the number of words
    var words = content.split(" ").length;
    // get the number of minutes assuming 
    //reading speed 1min for every 100 words
    var mins = Math.round(words / 100);
    // return the estimate
    return mins + " mins ";
  };
});
app.filter('limitContent', function () {
  return function (text) {

    // get the words from the text
    var words = text.split(" ");
    // get a number of them 
    var content = words.slice(0, 40);
    // return the new content
    return content.join(" ");
  };
});
app.filter('dotsInTheEnd', function () {
  return function (text) {
    // simply add ... in the end
    return text + "...";
  };
});
app.filter('getImgUrl', function () {
  return function (text) {
    // locate the 1st image src in the text
    var regex = new RegExp('src="https?:\/\/.*\.(?:png|jpg|gif)"');
    var imgSrc = String(regex.exec(text));
    // return the image in html tag for usage
    return "<img class='img-responsive center-block' " + imgSrc + "/>";
  };
});