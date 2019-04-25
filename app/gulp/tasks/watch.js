let gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    })

    watch('./index.html', function () {
        browserSync.reload();
    })

    // watch('./index.html', function () {
    //     gulp.start('html')
    // })
    watch('./assets/styles/**/*.css', function () {
        gulp.start('cssInject')
    })
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./temp/styles/styles.css')
        .pipe(browserSync.stream());
})