module.exports = function (movieApp) {
    function MovieController($log) {
        var vm = this;
        vm.msg = 'Welcome to the movie database';
        vm.moviesList = [
            {
                name: 'star wars',
                rating: 1
            },
            {
                name: 'ocean\'s eleven',
                rating: 3.5
            },
            {
                name: 'Raees',
                rating: 3.5
            },
            {
                name: 'Dangal',
                rating: 3.5
            }
        ];
        vm.$onInit = function () {
            $log.log('initalizing');
        };
        vm.incrementRating = function(movie) {
            if (movie.rating < 5) {
                return movie.rating++;
            } 
        };
        vm.decrementRating = function(movie) {
            if (movie.rating > 1) {
                return movie.rating--;
            } 
        };
    }

    movieApp.component('movieListComponent', {
        templateUrl: './app/movie-list-component/movie-list-template.html',
        controllerAs: 'vm',
        controller: ['$log', MovieController]
    });
    
};