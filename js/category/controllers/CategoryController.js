function CategoryController($stateParams, Category){
  var self = this;
  //show
  this.category = Category.get({id: $stateParams.id});

  // update
  this.editCategory = function(){
    self.category.editing = true;
  }

  this.update = function(){
    var category = self.category;
    Category.update({id: category.id}, {category: category}, function(){
      category.editing = false;
    })
  }
}

angular.module('app')
  .controller('CategoryController', CategoryController)
