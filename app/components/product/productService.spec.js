describe('Product service', function() {
  var productService, $httpBackend;

  beforeEach(angular.mock.module('robotStore'));
  beforeEach(inject(function(_productService_, _$httpBackend_) {
    productService = _productService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should exist', function() {
    expect(productService).toBeDefined();
  });

  describe('getProducts()', function() {
    var API = 'http://localhost:8080/api/robots/',
        RESPONSE_SUCCESS = [{"id":"59f1c352bb25fe71f46e8f7d","name":"Top Race Remote Control Walking Talking","createdAt":1509016402016,"description":"Top Race Remote Control Walking Talking Toy Robot, This intelligent Remote Control Robot Dances, Sings, Reads Stories, Math Quiz, Shooting Discs, and Voice Mimicking. Intelligent Robot Toy, With LED Lights and Music, Operates with Wireless Remote Control, Reads 10 Children Favorite Stories, Sings 10 Children Favorite Songs. Shoots Disc with Remote, Flash Dance, and Math Quiz, and will Imitate your Voice, and Much More. Size 12 Inches Tall, Robot Uses 5 AA Batteries, Remote Uses 2 AA Bat. (Not Included)","shipping":"FREE Shipping","price":35.99,"soldby":"Dollar Deal","weight":"2.9 pounds","dimensions":"16.9 x 11.3 x 5.7 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71uI92lAIKL._SL1116_.jpg","image2":null,"image3":null,"url":"https://www.amazon.com/Top-Race-Control-Shooting-Mimicking/dp/B072BR396W/ref=sr_1_11?ie=UTF8&qid=1509010237&sr=8-11&keywords=robot"},{"id":"59f1becfbb25fe71f46e8f7c","name":"Wonder Workshop Dash Robot","createdAt":1509015247321,"description":"harged and ready to play out of the box, Dash is a real robot that makes learning to code fun for kids. Responding to voice, navigating objects, dancing, and singing, Dash is the robot your child always dreamed of having. Dash presents your kids with hundreds of projects, challenges and puzzles as well as endless possibilities for freeform plays. Dash works with 5 free mobile apps for your Apple, Android and Kindle Fire devices.","shipping":"FREE Shipping","price":149.95,"soldby":"Amazon.com","weight":"3 lbs","dimensions":"7.17 x 6.69 x 6.34 in","image1":"https://images-na.ssl-images-amazon.com/images/I/41PE3fiDw%2BL.jpg","image2":"https://images-na.ssl-images-amazon.com/images/I/61phnyRF9jL._SL1000_.jpg","image3":"https://images-na.ssl-images-amazon.com/images/I/617nE6oXi8L._SL1000_.jpg","url":"https://www.amazon.com/Wonder-Workshop-DA01-Dash-Robot/dp/B00SKURVKY/ref=sr_1_9?ie=UTF8&qid=1509010237&sr=8-9&keywords=robot"},{"id":"59f1bc87bb25fe71f46e8f7b","name":"Cozmo","createdAt":1509014663428,"description":"He’s a supercomputer and loyal sidekick all at once. Thanks to artificial intelligence, Cozmo can express hundreds of emotions. From curious to clever, persistent to playful, he has personality x 10. He knows your name, face, and quirks. And best of all, he continues to evolve the more you hang out.","shipping":"FREE Shipping","price":179.99,"soldby":"Amazon.com","weight":"3 lbs","dimensions":"7.25 x 5 x 10 in","image1":"https://images-na.ssl-images-amazon.com/images/I/51V73pQXYfL.jpg","image2":"https://images-na.ssl-images-amazon.com/images/I/61MVY8wa4nL._SL1000_.jpg","image3":null,"url":"https://www.amazon.com/Anki-000-00048-Cozmo/dp/B01GA1298S/ref=sr_1_4?ie=UTF8&qid=1509010237&sr=8-4&keywords=robot"}],
        result;

    it('should return all robots', function() {
      $httpBackend.when('GET', API).respond(RESPONSE_SUCCESS);
      productService.getProducts()
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();
      expect(result).toEqual(RESPONSE_SUCCESS);
    });
  });

  describe('getProduct()', function() {
    var API = 'http://localhost:8080/api/robot/',
        RESPONSE_SUCCESS = {"id":"59f1c352bb25fe71f46e8f7d","name":"Top Race Remote Control Walking Talking","createdAt":1509016402016,"description":"Top Race Remote Control Walking Talking Toy Robot, This intelligent Remote Control Robot Dances, Sings, Reads Stories, Math Quiz, Shooting Discs, and Voice Mimicking. Intelligent Robot Toy, With LED Lights and Music, Operates with Wireless Remote Control, Reads 10 Children Favorite Stories, Sings 10 Children Favorite Songs. Shoots Disc with Remote, Flash Dance, and Math Quiz, and will Imitate your Voice, and Much More. Size 12 Inches Tall, Robot Uses 5 AA Batteries, Remote Uses 2 AA Bat. (Not Included)","shipping":"FREE Shipping","price":35.99,"soldby":"Dollar Deal","weight":"2.9 pounds","dimensions":"16.9 x 11.3 x 5.7 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71uI92lAIKL._SL1116_.jpg","image2":null,"image3":null,"url":"https://www.amazon.com/Top-Race-Control-Shooting-Mimicking/dp/B072BR396W/ref=sr_1_11?ie=UTF8&qid=1509010237&sr=8-11&keywords=robot"},
        result;

    beforeEach(function() {
      result = {};
      spyOn(productService, 'getProduct').and.callThrough();
    });

    it('should return one robot', function() {
      var id = '59f1c352bb25fe71f46e8f7d';

      $httpBackend.when('GET', API + id).respond(RESPONSE_SUCCESS);
      productService.getProduct(id)
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();

      expect(productService.getProduct).toHaveBeenCalledWith(id);
      expect(result).toEqual(RESPONSE_SUCCESS);
    });
  });

  describe('addProduct()', function() {
    var API = 'http://localhost:8080/api/robot',
        RESPONSE_SUCCESS = {"id":"59f98096bb25fe3e5461b7f4","name":"iHobby Remote Control Robots","createdAt":1509523606688,"description":"New Arrival infrared control funny robots, walk and sliding walk movement modes, transmitter control and Gesture Sense control modes. Building in colorful LED light Function:\n1)Gesture Sense:Strong sensing component enable Robot sense your gesture and move with commands: forward/backward, turn left and right.","shipping":"FREE Shipping","price":39.98,"soldby":"LandBow","weight":"1.4 pounds","dimensions":"12.2 x 7.9 x 3.8 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71Z-tNZsGPL._SL1500_.jpg","image2":"https://images-na.ssl-images-amazon.com/images/I/71vWL-5JE4L._SL1500_.jpg","image3":null,"url":"https://www.amazon.com/iHobby-Remote-Control-Robots-Programmable/dp/B074V13JRR/ref=sr_1_9?s=toys-and-games&ie=UTF8&qid=1509523295&sr=1-9&keywords=robot"},
        item = {"name":"iHobby Remote Control Robots","description":"New Arrival infrared control funny robots, walk and sliding walk movement modes, transmitter control and Gesture Sense control modes. Building in colorful LED light Function:\n1)Gesture Sense:Strong sensing component enable Robot sense your gesture and move with commands: forward/backward, turn left and right.","shipping":"FREE Shipping","price":39.98,"soldby":"LandBow","weight":"1.4 pounds","dimensions":"12.2 x 7.9 x 3.8 inches","image1":"https://images-na.ssl-images-amazon.com/images/I/71Z-tNZsGPL._SL1500_.jpg","image2":"https://images-na.ssl-images-amazon.com/images/I/71vWL-5JE4L._SL1500_.jpg","image3":null,"url":"https://www.amazon.com/iHobby-Remote-Control-Robots-Programmable/dp/B074V13JRR/ref=sr_1_9?s=toys-and-games&ie=UTF8&qid=1509523295&sr=1-9&keywords=robot"},
        result;

    beforeEach(function() {
      result = {};
      spyOn(productService, 'addProduct').and.callThrough();
    });

    it('should add a new robot', function() {
      $httpBackend.when('POST', API, item).respond(RESPONSE_SUCCESS);
      productService.addProduct(item)
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();

      expect(productService.addProduct).toHaveBeenCalledWith(item);
      expect(result).toEqual(RESPONSE_SUCCESS);
    });
  });

  describe('deleteProduct()', function() {
    var API = 'http://localhost:8080/api/robot/',
        RESPONSE_SUCCESS = '',
        result;

    beforeEach(function() {
      result = {};
      spyOn(productService, 'deleteProduct').and.callThrough();
    });

    it('should delete a robot', function() {
      var id = '59f1c352bb25fe71f46e8f7d';

      $httpBackend.when('DELETE', API + id).respond(RESPONSE_SUCCESS);
      productService.deleteProduct(id)
        .then(function(response) {
          result = response.data;
        });
      $httpBackend.flush();

      expect(productService.deleteProduct).toHaveBeenCalledWith(id);
      expect(result).toEqual(RESPONSE_SUCCESS);
    });
  });
});