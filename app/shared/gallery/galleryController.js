app.controller('GalleryController', function() {
  this.imgIndex = 0;

  this.showChange = function(index) {
    this.imgIndex = index;
  };
});