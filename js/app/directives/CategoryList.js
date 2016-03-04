function CategoryList(){
  return {
    restrict: "EA",
    templateUrl: 'js/app/templates/index.html',
    replace: true
  }
}

angular.module('app')
  .directive('categoryList', CategoryList)
