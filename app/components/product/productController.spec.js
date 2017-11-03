describe('components.product', function() {
  var $controller, productService, $httpBackend,
      RESPONSE_SUCCESS = {"id":"59f1c352bb25fe71f46e8f7d","name":"Top Race Remote Control Walking Talking","createdAt":1509016402016,"description":"Top Race Remote Control Walking Talking Toy Robot, This intelligent Remote Control Robot Dances, Sings, Reads Stories, Math Quiz, Shooting Discs, and Voice Mimicking. Intelligent Robot Toy, With LED Lights and Music, Operates with Wireless Remote Control, Reads 10 Children Favorite Stories, Sings 10 Children Favorite Songs. Shoots Disc with Remote, Flash Dance, and Math Quiz, and will Imitate your Voice, and Much More. Size 12 Inches Tall, Robot Uses 5 AA Batteries, Remote Uses 2 AA Bat. (Not Included)","shipping":"FREE Shipping","price":35.99,"soldby":"Dollar Deal","weight":"2.9 pounds","dimensions":"16.9 x 11.3 x 5.7 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71uI92lAIKL._SL1116_.jpg","image2":null,"image3":null,"url":"https://www.amazon.com/Top-Race-Control-Shooting-Mimicking/dp/B072BR396W/ref=sr_1_11?ie=UTF8&qid=1509010237&sr=8-11&keywords=robot"},
      DELETE_RESPONSE_SUCCESS = '',
      API = 'http://localhost:8080/api/robot/';

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('robotStore'));

  beforeEach(inject(function(_$controller_, _productService_, _$httpBackend_) {
    $controller = _$controller_;
    productService = _productService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('ProductController', function() {
    var ProductController;

    beforeEach(function() {
      ProductController = $controller('ProductController');
    });

    it('should be defined', function() {
      expect(ProductController).toBeDefined();
    });
  });

  describe('Product Controller with a valid product', function() {
    var product, ProductController;

    beforeEach(function() {
      product = {"id":"59f1c352bb25fe71f46e8f7d","name":"Top Race Remote Control Walking Talking","createdAt":1509016402016,"description":"Top Race Remote Control Walking Talking Toy Robot, This intelligent Remote Control Robot Dances, Sings, Reads Stories, Math Quiz, Shooting Discs, and Voice Mimicking. Intelligent Robot Toy, With LED Lights and Music, Operates with Wireless Remote Control, Reads 10 Children Favorite Stories, Sings 10 Children Favorite Songs. Shoots Disc with Remote, Flash Dance, and Math Quiz, and will Imitate your Voice, and Much More. Size 12 Inches Tall, Robot Uses 5 AA Batteries, Remote Uses 2 AA Bat. (Not Included)","shipping":"FREE Shipping","price":35.99,"soldby":"Dollar Deal","weight":"2.9 pounds","dimensions":"16.9 x 11.3 x 5.7 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71uI92lAIKL._SL1116_.jpg","image2":null,"image3":null,"url":"https://www.amazon.com/Top-Race-Control-Shooting-Mimicking/dp/B072BR396W/ref=sr_1_11?ie=UTF8&qid=1509010237&sr=8-11&keywords=robot"};
      spyOn(productService, 'getProduct').and.callThrough();
      spyOn(productService, 'deleteProduct').and.callThrough();
      ProductController = $controller('ProductController');
    });

    it('should call productService.getProduct and return a product', function() {
      var id = '59f1c352bb25fe71f46e8f7d',
          result;
      
      $httpBackend.when('GET', API + id).respond(RESPONSE_SUCCESS);
      productService.getProduct(id)
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();

      expect(productService.getProduct).toHaveBeenCalledWith(id);
      expect(result).toEqual(RESPONSE_SUCCESS);
    });

    it('should call deleteProduct and delete a product', function() {
      var id = '59f1c352bb25fe71f46e8f7d',
      result;
  
      $httpBackend.when('DELETE', API + id).respond(DELETE_RESPONSE_SUCCESS);
      productService.deleteProduct(id)
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();

      expect(productService.deleteProduct).toHaveBeenCalledWith(id);
      expect(result).toEqual(DELETE_RESPONSE_SUCCESS);
    });
  });
});