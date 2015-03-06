var gulp = require('gulp'),
    concat = require('gulp-concat'),
    file = require('gulp-file-include'),
    htmlMinify = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    jsMinify = require('gulp-uglify'),
    util = require('gulp-util'),
    htmlFiles = ['html/header.html', 'html/projects.html', 'html/jobs.html', 'html/skills.html', 'html/posts.html', 'html/footer.html'];

gulp.task('css', function () {
    return gulp.src('assets/css/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('assets/dist/'))
});

gulp.task('js', function () {
    return gulp.src('assets/js/main.js')
    .pipe(jsMinify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/dist/'))
});

gulp.task('html', function () {
    return gulp.src('main/index.html')
    .pipe(file({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(htmlMinify({
        conditionals: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(''))
});

gulp.task('site', function () {
    gulp.run('css');
    // gulp.run('js');
    gulp.run('html');
});

gulp.task('watch', function() {
    gulp.run('site');

    // gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/css/*.scss', ['css']);
    gulp.watch(['html/*.html', 'main/index.html'], ['html']);
});
