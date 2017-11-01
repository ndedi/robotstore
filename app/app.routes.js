app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/components/home/home.html',
      controller: 'StoreController',
      controllerAs: 'store'
    })
    
    .state('product', {
      url: '/product/:productId',
      templateUrl: 'app/components/product/product.html',
      controller: 'ProductController',
      controllerAs: 'product'
    })

    .state('add', {
      url: '/product/add',
      templateUrl: 'app/components/addproduct/add.html',
      controller: 'AddProductController',
      controllerAs: 'addCtrl'
    });
});