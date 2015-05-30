var ENVIROMENT = process.env.NODE_ENV || 'development'

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          loadPath: ['lib', 'app', 'bower_components/bootstrap-sass/assets/stylesheets'],
          sourcemap: ENVIROMENT == 'development' ? 'auto' : 'none',
          style: ENVIROMENT == 'development' ? 'expanded' : 'compressed'
        },
        files: { 'public/client.css': 'client.scss' }
      }
    },
    browserify: {
      options: {
        path: []
      },
      files: {
        'public/client.js': 'client.js'
      }
    },
    envify: {
      'public/client.js': 'public/client.js'
    },
    uglify: {
      'public/client.js': 'public/client.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-envify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', [ENVIROMENT]);

  grunt.registerTask('development', ['sass', 'browserify', 'envify'])
  grunt.registerTask('production', ['sass', 'browserify', 'envify', 'uglify']);
}
