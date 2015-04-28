var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    util = require('gulp-util');

gulp.task('css', function() {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('assets/dist/'))
});

gulp.task('site', function() {
    gulp.run('css');
});

gulp.task('watch', function() {
    gulp.run('css');

    gulp.watch('assets/css/*.scss', ['css']);
});
