// Module IIFE
// Immediately Invoked Function Expression
(function() {
  'use strict';

  var module = angular.module('services/user.service', []);

  /*
  function UserService() {

  }

  UserService.prototype.getList = function() {
    
  };
  */

  class UserService {
    constructor($http) {
      this.$http = $http;
    }
    getList() {
      return this.$http.get('https://jsonplaceholder.typicode.com/users');
    }
  }

  module.service('userService', UserService);

  /*
  function userServiceFactory() {
    return {
      getList() {

      }
    };
  }

  module.factory('userService', userServiceFactory);
  */
}());


