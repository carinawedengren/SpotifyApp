if (!spotify)
    var spotify = {};

if (!spotify.services)
    spotify.services = {};

spotify.services.SpotifySearchService = function ($http, $log) {
    this.search = function (query) {
        return $http.get(`https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=artist`)
        .then(function (result) {
            return result.data.artists.items;
        }, function (err) {
            $log.error("Error while searching Spotify", err);
        });
    }
}

spotify.services.SpotifySearchService.$inject = ['$http', '$log'];