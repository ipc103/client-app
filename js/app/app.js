angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('category', {
      url: '/categories/:id',
      templateUrl: 'js/app/templates/categories/show.html',
      controller: 'CategoriesController as CategoriesCtrl'
    })
  }])
