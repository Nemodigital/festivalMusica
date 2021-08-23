const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Función que compila SASS
function css(  ) {
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'expanded'
    }) )
        .pipe( dest('./build/css/') )
}

function minificarCss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css/') )
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
}

function watchArchivos() {
    watch( 'src/scss/**/*.scss', css ); //* = la carpeta actual. **/ = recorre todas las carpetas dentro de scss
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;