// Efecto Scrol View
document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

// para mostrar la barra de navegación fija en el top de la pantalla
function navegacionFija() {
    // registrar en Intersection Observer. Lo creamos
    // lo que hace es estar observando que un elemento se ve en la pantalla del navegador

    const barra = document.querySelector('.header');
    // agregamos la clase .fijo a _header.scss para aparecer y desaparecer la barra de menú
    const observer = new IntersectionObserver( function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        }else {
            barra.classList.add('fijo');
        }
            
    });

    // elemento a observar. Lo usamos
    observer.observe(document.querySelector('.sobre-festival'));

}


function scrollNav() {
    // seleccionamos todos los enlaces de .navegacion-principal
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    console.log(enlaces);

    // si hay una coleccion de elementos, como este caso, hay que iterar en cada uno para poder usar addEventListener()
    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            // console.log(e.target.attributes.href.value);

            // esto nos da la sección a la cual le estamos dando click
            const seccion = document.querySelector(e.target.attributes.href.value);

            // le damos el efecto al scroll. smooth es lento
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

}