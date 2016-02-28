function CategoriesController($stateParams, Category){
  var self = this;
  // index
  this.categories = Category.query();

  // create
  this.newCategory = new Category();
  this.createCategory = function(){
    self.newCategory.$save(function(category){
      self.categories.push(category);
      self.newCategory = new Category();
    })
  }

  // update
  this.editCategory = function(){
    self.category.editing = true;
  }

  this.update = function(){
    var category = self.category;
    Category.update({id: category.id}, {category: category}, function(){
      category.editing = false;
    });
  }

  this.deleteCategory = function(category){
    var index = self.categories.indexOf(category);
    Category.delete(category, function(category){
      self.categories.splice(index, 1);
    })
  }

  // show
  if ($stateParams.id) {
    this.category = Category.get({id: $stateParams.id});
  }

}

angular.module('app')
  .controller('CategoriesController', CategoriesController)
