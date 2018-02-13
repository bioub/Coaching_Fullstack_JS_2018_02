// Module IIFE
// Immediately Invoked Function Expression
(function() {
  'use strict';

  var module = angular.module('hello/hello.component', []);

  module.component('helloContact', {
    templateUrl: '/hello/hello.component.html',
    bindings: {
      prenom: '@',
      nom: '<',
    }
  });
}());


