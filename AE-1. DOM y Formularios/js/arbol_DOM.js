/* Creacción del HTML a través del DOM en JS */

function cargarDOM(){

    var cabecera = document.getElementsByTagName('head'); // extraemos una colección aunque solo haya uno
    cabecera = cabecera[0]; // nos quedamos con el único que hay y que queremos

    

    var cuerpo = document.getElementsByTagName('body');
    cuerpo = cuerpo[0];
    
    // var div = cuerpo.getElementsByTagName('div');
    var div = document.getElementsByTagName('div');
    div = div[0];

    var newH3 = document.createElement('h3');
    var newContentH3 = document.createTextNode('Bienvenidos a su BANCO');
    newH3.appendChild(newContentH3);

    document.body.appendChild(newH3); // titulo creado y vinculado
    
    var element_p = div1.getElementsByTagName('p');
    element_p = element_p[0];

    var tagP_content = document.createTextNode('Debe rellenar el siguiente formulario para crear su perfil');    
    element_p.appendChild(tagP_content);

    document.body.div1.appendChild(element_p); // Párrafo creado y vinculado

}