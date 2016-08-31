
angular.module("SpotifyApp", ['ngRoute'])
    .controller('mainCtrl', spotify.controllers.MainController)
    .service('spotifySearchService', spotify.services.SpotifySearchService)
    .config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/Scripts/Routing/Views/home.tpl.html",
            controllerAs: 'vm'
        })
        .when("/about", {
            templateUrl: "red.htm",
            controllerAs: 'vm'
        });
});