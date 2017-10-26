var app = angular.module('robotStore', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      controller: 'StoreController',
      controllerAs: 'store'
    })
    
    .state('product', {
      url: '/product/:productId',
      templateUrl: 'views/product/product.html',
      controller: 'ProductController',
      controllerAs: 'product',
      resolve: {}
    })

    .state('add', {
      url: '/product/add',
      templateUrl: 'views/product/add.html',
      controller: 'AddProductController',
      controllerAs: 'addCtrl'
    });
});
