function CategoriesController($stateParams, $scope, Category){
  var self = this;
  // index
  self.categories = Category.query();

  // create
  this.newCategory = new Category();
  this.createCategory = function(){
    self.newCategory.$save(function(category){
      self.categories.push(category);
      self.newCategory = new Category();
    })
  }

  this.deleteCategory = function(category){
    var index = self.categories.indexOf(category);
    Category.delete(category, function(category){
      self.categories.splice(index, 1);
    })
  }

}

angular.module('app')
  .controller('CategoriesController', CategoriesController)
