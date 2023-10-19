/* Creacción del HTML a través del DOM en JS */

function cargarDOM(){

    // var cabecera = document.getElementsByTagName("head");
    
    // var cuerpo = document.getElementsByTagName("body");
    // var div = cuerpo.getElementsByTagName("div");
    var div = document.getElementsByTagName("div");

    var newH3 = document.createElement("h3");
    var newContentH3 = document.createTextNode("Bienvenidos a su BANCO");
    newH3.appendChild(newContentH3);

    document.body.appendChild(newH3);

    //document.insertBefore(div, newH3);
    
}