(function(){
  'use strict';

  angular.module('yum.my')
  .factory('HttpInterceptor', ['$rootScope', function($rootScope){

    function response(res){
      console.log(res.headers('x-authenticated-user'));
      var email = res.headers('x-authenticated-user');

      if(email){
        $rootScope.$broadcast('authenticated', email);
      }

      return res;
    }

    return {response:response};
  }]);
})();

