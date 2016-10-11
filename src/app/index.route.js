(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/template/home.template.html',
        controller: 'homeCtrl',
        controllerAs: 'controller'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
