app.service('productService', ['$http', function($http) {
  
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