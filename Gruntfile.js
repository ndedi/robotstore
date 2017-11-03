module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ";"
      },
      js: {
        src: [
          "assets/js/jquery-3.2.1.slim.min.js",
          "assets/js/popper.min.js",
          "assets/js/bootstrap.min.js",
          "assets/js/angular.min.js",
          "assets/js/angular-ui-router.min.js",
          "assets/js/angular-animate.js",
          "app/app.module.js",
          "app/app.routes.js",
          "app/app.animations.js",
          "app/shared/gallery/galleryController.js",
          "app/shared/title/titleService.js",
          "app/components/addproduct/addProductController.js",
          "app/components/home/storeController.js",
          "app/components/product/productController.js",
          "app/components/product/productService.js"
        ],
        dest: "assets/build/js/main.js"
      },
      css: {
        src: [
          "assets/css/bootstrap.css",
          "assets/css/animate.css",
          "assets/css/styles.css"
        ],
        dest: "assets/build/css/main.css"
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        src: 'assets/build/js/main.js',
        dest: 'assets/build/js/main.min.js'
      },
      css: {
        src: 'assets/build/css/main.css',
        dest: 'assets/build/css/main.min.css'
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["concat", "uglify"]);
};