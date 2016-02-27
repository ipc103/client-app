function CategoriesController($stateParams){
  this.categories = [
    {id: 1, name: 'Recipes'},
    {id: 2, name: 'Restaurants'},
    {id: 3, name: 'Books'},
    {id: 4, name: 'Bars'},
    {id: 5, name: 'Movies'},
    {id: 6, name: 'Music'},
    {id: 7, name: 'Activities'}
  ];

  var self = this;
  this.categories.forEach(function(category){
    if (parseInt($stateParams.id) === category.id) {
      self.category = category;
    }
  })
}

angular.module('app')
  .controller('CategoriesController', CategoriesController)
