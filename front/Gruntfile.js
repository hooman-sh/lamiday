/**
 * Created by hooman on 1/29/17.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        './dist/**/*'
                    ]
                }]
            },
            server: '.tmp'
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'pictures/',
                    src: ['*.png','*.jpg'],
                    dest: 'dist/pictures'
                }]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/output.min.js': ['js/app.js','js/directives/*.js','js/services/*.js','js/controllers/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'html/',
                    dest: 'dist/html',
                    src: [
                        '*.html'
                    ]
                }, {
                    expand: true,
                    cwd: 'node_modules/',
                    dest: 'dist/node_modules',
                    src: ['**/*.*']
                }, {
                    expand: true,
                    dest: 'dist',
                    src: [
                        'package.json'
                    ]
                },{
                        expand: true,

                    dest: 'dist/pictures',
                    cwd:'pictures/',
                    src: [
                        '**/*.*'
                    ]
                }, {
                    expand: true,
                    cwd:'font/css_woff',
                    dest: 'dist/font',
                    src: [
                        '*.css'
                    ]
                }, {
                    expand: true,
                    cwd:'js/',
                    dest: 'dist/js',
                    src: [
                        'jquery_effects.js'
                    ]
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Default task(s).
    grunt.registerTask('build', ['clean:dist','cssmin','uglify','copy:dist']);

};