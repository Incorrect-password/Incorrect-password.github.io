var gulp = require('gulp');
var sass = require ('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var babel = require('gulp-babel')
//var concat = require("gulp-concat");
var minify = require('gulp-minify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json")

function sassCompile(cb) {
    return gulp.src('app/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(gulp.dest('app/css'))
    cb();
}

function typescript(cb) {
    return tsProject.src() //specified in tsconfig
        .pipe(tsProject())
        .js.pipe(gulp.dest("app/js/dist"))
        cb()
}


//if youre not using typescript then use these.
// function babelTranspile(cb) {
//     return gulp.src("app/js/*.js")
//         .pipe(sourcemaps.init())
//         .pipe(babel())
//         .pipe(concat("all.js"))
//         .pipe(sourcemaps.write("."))
//         .pipe(minify())
//         .pipe(gulp.dest("app/js/dist"))
// };

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
    //gulp.watch("app/js/*.js", babelTranspile);
    gulp.watch('app/js/*.ts', typescript);
}

exports.sass = sassCompile;
exports.ts = typescript;
exports.watch = watch;
//exports.babel = babelTranspile;