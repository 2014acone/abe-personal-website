module.exports = function(grunt) {

    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'index.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/sass',
                    src: ['*.scss'],
                    dest: './public/css',
                    ext: '.css'
                }],
                options: {
                    sourcemap: 'none'
                }
            }
        },
        watch: {
            css: {
                files: 'app/sass/*.scss',
                tasks: ['sass']
            }
        },
        concurrent: {
            target: {
                tasks: ['build', 'watch', 'nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:target']);
    grunt.registerTask('build', ['sass']);
};
