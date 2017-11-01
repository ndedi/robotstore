app.controller('AddProductController', ['$http', '$state', 'productService', 'titleService', function($http, $state, productService, titleService) {
  var _addProductController = this;
  this.robot = {};
  this.errorMessage = '';
  this.errorField = '';
  
  titleService.setTitle( 'Add a new robot' );
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