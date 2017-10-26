(function() {
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

  app.service('titelService', function() {
    this.setTitle = function( name ) {
      document.title = name;
    };
  });

  app.service('productService', ['$http', function($http) {
    var _productSv = this,
        products = [];
    
    this.getProducts = function() {
      return $http.get('http://localhost:8080/api/robots/');
    };

    this.getProduct = function(id) {
      return $http.get('http://localhost:8080/api/robot/' + id);
    };

    this.addProduct = function(item) {
      return $http.post('http://localhost:8080/api/robot', item);
    };

    this.deleteProduct = function(id) {
      return $http.delete('http://localhost:8080/api/robot/' + id);
    }
  }]);
  
  app.controller('StoreController', ['$http', 'productService', function($http, productService) {
    var _storeCtrl = this;
    this.products = [];

    productService.getProducts()
      .then(
        function success(response) {
          _storeCtrl.products = response.data;

          for(var i = 0; i < _storeCtrl.products.length; i++) {
            _storeCtrl.products[i].images = [];
            if( _storeCtrl.products[i].image1 != null ) _storeCtrl.products[i].images.push(_storeCtrl.products[i].image1);
            if( _storeCtrl.products[i].image2 != null ) _storeCtrl.products[i].images.push(_storeCtrl.products[i].image2);
            if( _storeCtrl.products[i].image3 != null ) _storeCtrl.products[i].images.push(_storeCtrl.products[i].image3);
          }
        },
        function error(err) {
          console.log( err );
        }
      );
  }]);

  app.controller('GalleryController', function() {
    this.imgIndex = 0;

    this.showChange = function(index) {
      this.imgIndex = index;
    };
  });

  app.controller('ProductController', ['$stateParams', '$state', 'productService', function($stateParams, $state, productService) {
    var _productCtrl = this;

    productService.getProduct( $stateParams.productId )
      .then(
        function success(response) {
          _productCtrl.item = response.data;
          _productCtrl.item.images = [];
          if( _productCtrl.item.image1 != null ) _productCtrl.item.images.push(_productCtrl.item.image1);
          if( _productCtrl.item.image2 != null ) _productCtrl.item.images.push(_productCtrl.item.image2);
          if( _productCtrl.item.image3 != null ) _productCtrl.item.images.push(_productCtrl.item.image3);
        },
        function error(err) {
          if( err.status == 404 ) {
            $state.go('home');
          }
        }
      );

    this.deleteProduct = function(id) {
      productService.deleteProduct( id )
        .then(
          function success(response) {
            $('#deleteProduct').modal('hide');
            $('#deleteProduct').on('hidden.bs.modal', function (e) {
              $state.go('home');
            })
          },
          function error(err) {
            console.log( err );
          }
        );
    }
  }]);

  app.controller('AddProductController', ['$http', '$state', 'productService', function($http, $state, productService) {
    var _addProductController = this;
    this.robot = {};
    this.errorMessage = '';
    this.errorField = '';
    
    this.addRobot = function() {
      productService.addProduct(this.robot)
        .then(
          function success(response) {
            _addProductController.robot = {};
            $state.go('home');
          },
          function error(err) {
            console.log( err );
            _addProductController.errorMessage = err.data.errors[0].defaultMessage;
            _addProductController.errorField = err.data.errors[0].field;
          }
        );
    };
  }]);
})();