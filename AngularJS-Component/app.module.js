// Module IIFE
// Immediately Invoked Function Expression
(function() {
  'use strict';

  var module = angular.module('app.module', [
    'hello/hello.component',
    'users-list/users-list.component',
  ]);

}());


