// cuando el documento este listo
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    // genero las 12 imagenes que estan en build/img/thumb
    for( let i = 1; i <=12; i++) {
        const imagen = document.createElement('IMG');
        // ahora el src. Donde están las imagenes
        imagen.src = `build/img/thumb/${i}.webp`;
        // esto es para saber a que imagen le damos click y así poder hacerla grande
        imagen.dataset.imagenId = i;

        // añadir la funcion mostrarImagen()
        imagen.onclick = mostrarImagen;

        // genero el <li>
        const lista = document.createElement('LI');
        // en el <li> añadimos las imágenes
        lista.appendChild(imagen);

        // terminamos agregando los <li> a la galería
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    // así se ha que foto le han dado
    // console.log(typeof e.target.dataset.imagenId);

    // como es un string el número que me da, lo paso a número
    const id = parseInt(e.target.dataset.imagenId);
    // Genera la imagen en grande y genero el html
    const imagen = document.createElement('IMG');
    // le paso la url de la imagen grande
    imagen.src = `build/img/grande/${id}.webp`;
    // genero el overlay. Cuando muestra la imagen el fondo se hace oscuro.
    const overlay = document.createElement('DIV');
    // agrego la imagen
    overlay.appendChild(imagen);
    // agregamos una clase css para mostrar dicha imagen en el centro de la página
    overlay.classList.add('overlay');

    // si damos click en el overlay se cierra la imagen
    overlay.onclick = function() {
        overlay.remove();
    }

    // Botón para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    // lo agrego a la imagen
    overlay.appendChild(cerrarImagen);

    // cuando se presiona la X, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    // mostrar en el html
    const body = document.querySelector('body');
    // agrego la imagen al body
    body.appendChild(overlay);

    // fijamos el fondo para no poder hacer scroll. Lo hacemos en el body en _globales.scss
    body.classList.add('fijar-body');

}