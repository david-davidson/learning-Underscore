'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({

    jscs: {
      src: [
        'tests/**/*.js'
      ],
      options: {
        config: '.jscsrc',
      }
    },

    jshint: {
      all: [
        'tests/**/*.js'
      ],
      options: {
        jshintrc: true
      }
    },

    watch: {
      all: {
        files: [
          'tests/**/*.js'
        ],
        tasks: [
          'jscs',
          'jshint'
        ]
      }
    }

  });

  grunt.registerTask('default', [
    'jscs',
    'jshint',
    'watch'
  ]);

};