module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        options:
          bare: true
        files: [
          expand: true
          cwd: 'js/source'
          src: ['**/*.coffee']
          dest: 'js/deploy'
          ext: '.js'
        ]
    less:
      compile:
        options:
          paths: ['Homepage/css']
        files:
          'css/styles.css' : ['css/less/styles.less']
    copy:
      development:
        cwd: 'js/source'
        src: 'libs/*'
        dest: 'js/deploy'
        expand: true
    watch:
      coffee:
        files: ['*.coffee', '**/*.coffee']
        tasks: 'coffee:compile'
      less:
        files: ['css/less/*.less']
        tasks: 'less:compile'


  # Dependencies
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  # Aliases
  grunt.registerTask 'config', 'coffee:config'
  grunt.registerTask 'development', [
    # 'clean:development'
    'copy:development'
    'less:compile'
  ]

  grunt.registerTask 'default', [
    'coffee'
    'less'
    'watch'
  ]