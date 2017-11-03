app.controller('StoreController', ['productService', 'titleService', function(productService, titleService) {
  var _storeCtrl = this;
  this.products = [];

  titleService.setTitle( 'Welcome to the RobotStore' );
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