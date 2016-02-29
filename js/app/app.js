angular.module('app', ['ui.router', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('category', {
      url: '/categories/:id',
      templateUrl: 'js/category/templates/show.html',
      controller: 'CategoryController as CategoryCtrl'
    })
      .state('category.recommendations', {
        url: '/recommendations',
        templateUrl: 'js/recommendations/templates/index.html',
        controller: 'RecommendationsController as RecommendationsCtrl'
      })
  }])
