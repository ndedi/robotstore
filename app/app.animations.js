$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});

app.animation('.storeproduct', function() {
    return {
      enter: function(element, done) {
        $(element).animateCss('fadeIn');
      },
      leave: function(element, done) {
        $(element).animateCss('fadeOut');
      },
      move: function(element, done) {}
    }
  })
  .animation('.main-view', function() {
    return {
      enter: function(element, done) {
        $(element).animateCss('fadeIn');
      },
      leave: function(element, done) {
        $(element).animateCss('fadeOut');
      },
      move: function(element, done) {}
    }
  });