/* Creacción del HTML a través del DOM en JS */

function cargarJuegos(){

    var cabecera = document.getElementsByTagName('head'); // extraemos una colección aunque solo haya uno
    cabecera = cabecera[0]; // nos quedamos con el único que hay y que queremos

    var cuerpo = document.getElementsByTagName('body');
    cuerpo = cuerpo[0];

    // var div1 = document.getElementById('div1');
    document.body.appendChild(div1);

    var newH3 = document.createElement('h3');
    var newContentH3 = document.createTextNode('Bienvenidos a su Listado de Juegos');
    newH3.appendChild(newContentH3);

    document.body.insertBefore(newH3, div1)   // titulo creado y vinculado

    /// --- Fin H3 --- ///
}