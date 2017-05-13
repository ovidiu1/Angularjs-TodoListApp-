var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect-dev', function(){
    connect.server({
        port: '/',
        port: 8080
    });
});
gulp.task('default', ['connect-dev']);


