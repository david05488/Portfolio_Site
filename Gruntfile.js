/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            /*
            Change these:

            width: ,
            suffix: ,
            quality:
            */
            aspectRatio: true,
            width: 250,
            suffix: "_250px_xs_",
            quality: 40
          }, {
            aspectRatio:true,
            width:450,
            suffix:"_450px_sm_",
            quality: 50
          }, {
            aspectRatio:true,
            width: 700,
            suffix: "_700px_md_",
            quality: 60
          }, {
            aspectRatio:true,
            width:1200,
            suffix:"_1200px_lg_",
            quality:70
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    }});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
