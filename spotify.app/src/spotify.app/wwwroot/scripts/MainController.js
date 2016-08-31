if (!spotify)
    var spotify = {};

if (!spotify.controllers)
    spotify.controllers = {};

spotify.controllers.MainController = function (spotifySearchService) {
    var self = this;
    self.query = "";

    self.search = function () {
        spotifySearchService.search(self.query)
        .then(function (result) {
            self.items = result;
        }, function (err) { });
    }
}

spotify.controllers.MainController.$inject = ['spotifySearchService']