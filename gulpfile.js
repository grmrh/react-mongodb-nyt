module.exports = function(gulp) {
  gulp.initConfig({
      pkg : gulp.file.readJSON('package.json'),
      jshint : {
          myFiles : ['./Server/<strong>/*.js','./Routes/</strong>/*.js']
      },
      nodemon : {
          script : './Server/'
      }
  });
  gulp.loadNpmTasks('gulp-contrib-jshint');
  gulp.loadNpmTasks('gulp-nodemon');
  gulp.registerTask('default', ['jshint','nodemon']);
};