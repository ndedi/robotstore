app.service('titleService', function() {
  this.setTitle = function( name ) {
    document.title = name + ' | RobotStore';
  };
});