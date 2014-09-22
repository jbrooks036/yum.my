(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Category', ['$http', function($http){

    function create(category){
      return $http.post('/categories/create', category);
    }

    function all(){
      return $http.get('/categories/index', categories);
    }

    return {category:category, categories:categories};
  }]);
})();

