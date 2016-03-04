function RecommendationsController($stateParams, Recommendation){
  var self = this;
  this.newRecommendation = new Recommendation();

  this.addRecommendation = function(category){
    var theCategory = category;
    self.newRecommendation.categoryId = category.id;
    self.newRecommendation.$save(function(newRecommendation){
      theCategory.recommendations.push(newRecommendation);
      self.newRecommendation = new Recommendation();
    })
  }

  if ($stateParams.recommendationId) {
    this.recommendation = Recommendation.get({id: $stateParams.recommendationId})
  }

  this.editRecommendation = function(){
    self.recommendation.editing = true;
  }

  this.update = function(){
    var recommendation = self.recommendation;
    Recommendation.update({id: recommendation.id}, {recommendation: recommendation}, function(){
      self.recommendation.editing = false;
    })
  }

}

angular.module('app')
  .controller('RecommendationsController', RecommendationsController)
