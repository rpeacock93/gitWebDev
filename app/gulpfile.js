let gulp = require('gulp')
let watch = require('gulp-watch')
let postcss = require('gulp-postcss')
let autoprefixer = require('autoprefixer')
let cssvars = require('postcss-simple-vars')
let nested = require('postcss-nested')
let cssImport = require('postcss-import')

gulp.task('default', function () {
    console.log("hooray - you created a Gulp task")
})

gulp.task('html', function () {
    console.log('Imagine something useful being done to your HTML here.');
})

gulp.task('styles', function () {
    return gulp.src('./assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./temp/styles'));
})

gulp.task('watch', function () {
    watch('./index.html', function () {
        gulp.start('html')
    })
    watch('./assets/styles/**/*.css', function () {
        gulp.start('styles')
    })
})