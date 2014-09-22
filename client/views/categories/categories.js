(function(){
  'use strict';

  angular.module('yum.my')
  .controller('CategoriesCtrl', 'Category', ['$scope', function($scope, Category){
    $scope.category = {};
    $scope.categories = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    $scope.add = function(){
      Category.create($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = {};
      });
    };

  }]);
})();

