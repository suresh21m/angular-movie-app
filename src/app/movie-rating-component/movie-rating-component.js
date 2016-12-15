module.exports = function (movieApp) {
    function MovieRatingController() {
        var vm = this;
        console.log(vm.value);
        vm.stars = vm.value;

    }

    movieApp.component('movieRatingComponent', {
        templateUrl: './app/movie-rating-component/movie-rating-template.html',
        controllerAs: 'vm',
        controller: MovieRatingController,
        bindings: {
            value: '<'
        }
    });
};