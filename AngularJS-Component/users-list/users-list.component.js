// Module IIFE
// Immediately Invoked Function Expression
(function() {
  'use strict';

  var module = angular.module('users-list/users-list.component', [
    'services/user.service',
  ]);

  /*
  function UsersListController(userService) {
    
  }
  */

  class UsersListController {
    constructor(userService) {
      userService.getList().then((users) => {
        this.users = users.data;
      });
    }
  }

  module.component('usersList', {
    templateUrl: '/users-list/users-list.component.html',
    controller: UsersListController,
  });
}());


