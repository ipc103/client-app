function CategoriesController($stateParams, Category){
  var self = this;
  this.categories = Category.query();
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
  if ($stateParams.id) {
    this.category = Category.get({id: $stateParams.id});
  }
}

angular.module('app')
  .controller('CategoriesController', CategoriesController)
