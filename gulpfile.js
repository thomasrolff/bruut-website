const {
    src,
    dest,
    watch
} = require('gulp');


const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


const styleSrc = './src/sass/**/*.scss';
const styleDest = './dist/css';
const vendorSrc = './src/js/vendors/*.js';
const vendorDest = './dist/js/vendors';
const scriptSrc = './src/js/*.js';
const scriptDest = './dist/js';


// Sass -> CSS
function css(done) {
    src(styleSrc)
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        })).on('error', sass.logError)
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(dest(styleDest));
    done();
};


// JS files -> main.js -> main.min.js
function js(done) {
    src(scriptSrc)
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: [
                ['@babel/env', {
                modules: false
                }]
            ]
        }))
        .pipe(dest(scriptDest))
        .pipe(uglify())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(dest(scriptDest));
    done();
};


// Vendor files -> vendor.js
function vendor(done) {
    src(vendorSrc)
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(dest(vendorDest));
    done();
};


// Minify images
function img(done) {
    src('src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
    done();
};


function watcher() {

    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    });
    
    watch(styleSrc, css);
    watch(scriptSrc, js);
    watch(vendorSrc, vendor);
    
    watch(['dist/*.html', 'dist/css/*.css', 'dist/js/*.js', 'dist/js/vendors/*.js']).on('change', browserSync.reload);
};


// Use default task to launch Browsersync and watch style/script files
// Run 'gulp img' to minify images into dist/img folder

exports.default = watcher;
exports.img = img;