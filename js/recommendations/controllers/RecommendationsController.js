function RecommendationsController(Recommendation){
  var self = this;
  this.recommendation = new Recommendation();

  this.addRecommendation = function(category){
    var theCategory = category;
    self.recommendation.categoryId = category.id;
    self.recommendation.$save(function(recommendation){
      theCategory.recommendations.push(recommendation);
      self.recommendation = new Recommendation();
    })
  }

}

angular.module('app')
  .controller('RecommendationsController', RecommendationsController)
