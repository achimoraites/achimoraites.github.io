// eslint-disable-next-line no-undef
var app = angular.module("myApp", ["ngRoute", "ngSanitize"]);


app.config(["$locationProvider",
	$locationProvider => {
		$locationProvider.hashPrefix("!");
	}
]);

app.config($routeProvider => {

	$routeProvider.when("/home", {
		templateUrl: "/partials/home.html",
		controller: "projectsCtrl"
	})
		.when("/projects", {
			templateUrl: "/partials/projects.html"
		})
		.when("/contact", {
			templateUrl: "/partials/contact.html"
		})
		.otherwise({
			redirectTo: "/home"
		});
});

if (window.location.hash === "#_=_") window.location.hash = "#!";

// controllers
app.controller("projectsCtrl", ["$scope", function ($scope) {

	$scope.toggleModal = modalId => {
		const modal = document.getElementById(modalId);
		modal.style.display = "block";

	};
	$scope.closeModal = modalId => {
		const modal = document.getElementById(modalId);
		modal.style.display = "none";
	};
	$scope.myProjects = [{
		id: 0,
		name: "QR Code Scanner",
		img: {
			sm: "/img/projects/qrCodeScanner.png",
			lg: "/img/projects/large/qrCodeScanner.png",
			webp: "/img/projects/qrCodeScanner.webp"
		},
		description: "An android app for scanning QR Codes. After scanning the user can use the information in the code : Contacts, emails, maps, products and more.",
		skills: " Android , Java , XML , zxing ",
		url: "https://play.google.com/store/apps/details?id=io.github.cyb3rn4u7.qrcodescanner"

	},
	{
		id: 1,
		name: "Music Master ",
		img: {
			sm: "/img/projects/Music_Master.png",
			lg: "/img/projects/large/Music_Master.png",
			webp: "/img/projects/Music_Master.webp"
		},
		description: "React app that uses the Spotify api to search artists, play songs & recommend Artists based on the user preferences.",
		skills: " React, JavaScript, Spotify API, HTML/CSS ",
		url: "#"

	},
	{
		id: 2,
		name: "Personality Test",
		img: {
			sm: "/img/projects/personalityTest.png",
			lg: "/img/projects/large/personalityTest.png",
			webp: "/img/projects/personalityTest.webp"
		},
		description: "Application for taking a color personality test made with JQuery, bootstrap and Django in the Back-end. ",
		skills: " JavaScript, JQuery UI, Bootstrap, Django ",
		url: "https://afternoon-headland-41285.herokuapp.com/"

	}
	];

}]);

// blog feed
app.controller("bloggerCtrl", ["$scope", "bloggerApi", "$sce", function ($scope, bloggerApi) {
	$scope.numLimit = 3;

	bloggerApi.getBlogPosts()
		.then(result => {
			const items = result.data.items;
			$scope.posts = items;
			$scope.content = items.content;
		})
		.catch((error, status) => {
			$scope.error = "Status : " + status + " Something went wrong!";
		});


}]);

app.controller("scrollCtrl", ["$scope", "$location", "$anchorScroll",
	function ($scope, $location, $anchorScroll) {
		$scope.goToTop = () => {
			// set the location.hash to the id of
			// the element you wish to scroll to.
			$location.hash("top");
			// call $anchorScroll()
			$anchorScroll();
		};
	}
]);


app.service("bloggerApi", ["$http", "$sce", function bloggerApiService($http, $sce) {
	const apiUrl = "https://www.googleapis.com/blogger/v3/blogs/7900380589360458141/posts?key=AIzaSyDJZx2Tx3kW65FrvjXonMRSmNap4z7Rw-o";
	const trustedUrl = $sce.trustAsResourceUrl(apiUrl);



	return {
		getBlogPosts: () => {
			return $http.jsonp(trustedUrl, {
				jsonpCallbackParam: "callback",
				cache: true
			});
		}
	};
}]);

// helpers
const parseHTML = text => text ? String(text).replace(/<[^>]+>/gm, "") : "";

app.filter("htmlToPlaintext", () => {
	return text => {
		return parseHTML(text);
	};
});
app.filter("getTimeEstimate", () => {
	return text => {
		// remove html characters
		const content = parseHTML(text);
		// get the number of words
		const words = content.split(" ").length;
		// get the number of minutes assuming 
		// reading speed 1min for every 100 words
		const mins = Math.round(words / 100);
		// return the estimate
		return `${mins} mins `;
	};
});
app.filter("limitContent", () => {
	return text => {
		// get the words from the text
		const words = text.split(" ");
		// get a number of them 
		const content = words.slice(0, 40);
		// return the new content
		return content.join(" ");
	};
});
app.filter("dotsInTheEnd", () => {
	return text => {
		return `${text} ...`;
	};
});
app.filter("getImgUrl", () => {
	return text => {
		// locate the 1st image src in the text
		// eslint-disable-next-line no-useless-escape
		const regex = new RegExp("src=\"https?:\/\/.*\.(?:png|jpg|gif)\"");
		const imgSrc = String(regex.exec(text));
		// return the image in html tag for usage
		return `<img alt='article' class='img-responsive center-block lazyload' ${imgSrc} />`;

	};
});