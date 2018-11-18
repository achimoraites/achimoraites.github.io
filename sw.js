/* eslint-disable no-console */
const version = "1.04",
	preCache = "PRECACHE-" + version,
	cacheList = [
		"/",
		"css/style.min.css",
		"css/overide-bootstrap.min.css",
		"css/screen-sizes.min.css",
		"css/screen-sizes.css",
		"lib/bootstrap-3.3.7-dist/css/bootstrap.min.css",
		"/lib/jquery/dist/jquery.min.js",
		"/lib/bootstrap-3.3.7-dist/js/bootstrap.min.js",
		"lib/font-awesome/css/font-awesome.min.css",
		"lib/lazysizes/lazysizes.js",
		"/lib/jquery/dist/jquery.min.js",
		"/lib/bootstrap-3.3.7-dist/js/bootstrap.min.js",
		"/lib/angular/angular.min.js",
		"/lib/angular-route/angular-route.min.js",
		"/lib/angular-sanitize/angular-sanitize.min.js",
		"/js/app.min.js"
	];

/*  Service Worker Event Handlers */

// eslint-disable-next-line no-unused-vars
self.addEventListener("install", function (event) {

	console.log("Installing the service worker!");

	self.skipWaiting();

	caches.open(preCache)
		.then(cache => {

			cache.addAll(cacheList);

		});

});

self.addEventListener("activate", function (event) {

	event.waitUntil(

		caches.keys().then(cacheNames => {
			cacheNames.forEach(value => {

				if (value.indexOf(version) < 0) {
					caches.delete(value);
				}

			});

			console.log("service worker activated");

			return;

		})

	);

});

self.addEventListener("fetch", function (event) {

	event.respondWith(

		caches.match(event.request)
			.then(function (response) {

				if (response) {
					return response;
				}

				return fetch(event.request);
			})
			.catch(err => console.log("err",err)
			));

});