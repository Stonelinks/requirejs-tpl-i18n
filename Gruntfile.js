// this Gruntfile will probably be useful for nobody

module.exports = function(grunt) {
  'use strict';

  // Dependencies
  // ------------
  
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-exec');

  // Config
  // ------
  
  var SRC = 'tpl.js';
  var DST = '../mujin/dev/mujinjsclient/mujincontroller/app/vendor/requirejs-tpl-i18n/';
  
  grunt.initConfig({
    exec: {
      fixjsstyle: {
        command: 'fixjsstyle ' + SRC,
        stdout: true
      },
      copy: {
        command: function() {
          var cmds = [];
          cmds.push('cp ' + SRC + ' ' + DST);
          return cmds.join(' && ');
        },
        stdout: true
      }
    },
    regarde: {
      js: {
        files: SRC,
        tasks: ['exec:fixjsstyle', 'exec:copy']
      }
    }
  });

  // Tasks
  // -----

  grunt.registerTask('watch', ['regarde']);
  grunt.registerTask('default', ['exec:fixjsstyle', 'exec:copy']);
};
