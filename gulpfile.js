const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


// Función que compila SASS

// paths - rutas - para las imágenes
const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}
function css(  ) {
    return src(paths.scss)
    .pipe( sass({
        outputStyle: 'expanded'
    }) )
        .pipe( dest('./build/css/') )
}

function minificarCss() {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css/') )
}

// javascript
function javascript() {
    return src(paths.js)
        .pipe( concat('bundle.js') )
        .pipe( dest('./build/js') )
}

function imagenes() {
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
        .pipe( notify({ message: 'Imagen Minificada'}) );
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Versión webP lista'}) );
}

function watchArchivos() {
    watch( paths.scss, css ); //* = la carpeta actual. **/ = recorre todas las carpetas dentro de scss
    watch( paths.js, javascript );
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

// para que haga varias tareas a la vez
exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos )