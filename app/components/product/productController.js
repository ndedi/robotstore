app.controller('ProductController', ['$stateParams', '$state', 'productService', 'titleService', function($stateParams, $state, productService, titleService) {
  var _productCtrl = this;

  productService.getProduct( $stateParams.productId )
    .then(
      function success(response) {
        _productCtrl.item = response.data;
        titleService.setTitle( _productCtrl.item.name );
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
  };
}]);