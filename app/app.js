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
      return $http.get('/robotstore/app/data/products.json')
    };

    this.getProduct = function(id) {
      if (Number(id) == 1) {
        return {
          "id": 1,
          "name": "Cozmo",
          "description": "He’s a supercomputer and loyal sidekick all at once. Thanks to artificial intelligence, Cozmo can express hundreds of emotions.",
          "shine": 8,
          "price": 179.99,
          "rarity": 7,
          "weight": "3 pounds",
          "faces": 14,
          "url": "https://www.amazon.com/Anki-000-00048-Cozmo/dp/B01GA1298S/ref=sr_1_4?ie=UTF8&qid=1508208369&sr=8-4",
          "images": [
            "assets/img/cozmo/51V73pQXYfL.jpg",
            "assets/img/cozmo/61MVY8wa4nL._SL1000_.jpg",
            "assets/img/cozmo/61VBfy6ibkL._SL1093_.jpg"
          ],
          "reviews": [
            {
              "stars": 4,
              "body": "The thing I’m most excited about now is playing with Cozmo’s SDK, which will hopefully allow me to unlock more of his potential and create abilities for him myself.",
              "author": "book_thief@me.com",
              "createdOn": 1397490980837
            }, 
            {
              "stars": 5,
              "body": "Wow, this little guy is Amazing!",
              "author": "stevem@me.com",
              "createdOn": 1397490980837
            }
          ]
        };
      } else if (Number(id) == 2) {
        return {
          "id": 2,
          "name": "WowWee - MiP the Toy Robot - White",
          "description": "Perched atop unique dual wheels, this multi-functional and autonomous robot is more than just a toy.",
          "shine": 8,
          "price": 49.99,
          "rarity": 7,
          "weight": "10.6 ounces",
          "faces": 14,
          "url": "https://www.amazon.com/WowWee-MiP-Toy-Robot-White/dp/B00KMSOIGM/ref=sr_1_5?ie=UTF8&qid=1508208369&sr=8-5",
          "images": [
            "assets/img/wowwee/1.jpg",
            "assets/img/wowwee/2.jpg",
            "assets/img/wowwee/3.jpg"
          ],
          "reviews": [
            {
              "stars": 4,
              "body": "The thing I’m most excited about now is playing with Cozmo’s SDK, which will hopefully allow me to unlock more of his potential and create abilities for him myself.",
              "author": "book_thief@me.com",
              "createdOn": 1397490980837
            }, 
            {
              "stars": 3,
              "body": "Wow, this little guy is Amazing!",
              "author": "stevem@me.com",
              "createdOn": 1397490980837
            }
          ]
        };
      }
    }
  }]);
  
  app.controller('StoreController', ['$http', 'productService', function($http, productService) {
    var _storeCtrl = this;
    this.products = [];

    productService.getProducts()
      .then(
        function success(response) {
          _storeCtrl.products = response.data;
        },
        function error(response) {
          console.log( response );
        }
      );
  }]);

  app.controller('GalleryController', function() {
    this.imgIndex = 0;

    this.showChange = function(index) {
      this.imgIndex = index;
    };
  });

  app.controller('ProductController', ['$stateParams', 'productService', function($stateParams, productService) {
    this.item = productService.getProduct( $stateParams.productId );
  }]);

  app.controller('AddProductController', function() {
    this.robot = {};
    
    this.addRobot = function() {
      console.log( this.robot );
      this.robot = {};
    };
  });
})();