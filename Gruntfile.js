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
        files: {
          'public/frontend.css': 'frontend.scss',
          'public/backend.css': 'backend.scss'
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'public/frontend.js': 'frontend.js',
          'public/backend.js': 'backend.js'
        }
      }
    },
    envify: {
      dist: {
        files: {
          'public/frontend.js': 'public/frontend.js',
          'public/backend.js': 'public/backend.js'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'public/frontend.js': 'public/frontend.js',
          'public/backend.js': 'public/backend.js'
        }
      }
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
