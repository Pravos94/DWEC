/* Creacción del HTML a través del DOM en JS */

function cargarDOM(){

    var cabecera = document.getElementsByTagName('head'); // extraemos una colección aunque solo haya uno
    cabecera = cabecera[0]; // nos quedamos con el único que hay y que queremos

    var cuerpo = document.getElementsByTagName('body');
    cuerpo = cuerpo[0];

    // var div1 = document.getElementById('div1');
    document.body.appendChild(div1);

    var newH3 = document.createElement('h3');
    var newContentH3 = document.createTextNode('Bienvenidos a su BANCO');
    newH3.appendChild(newContentH3);

    document.body.insertBefore(newH3, div1)   // titulo creado y vinculado

    /// --- Fin H3 --- ///
    
    var element_p = document.createElement('p');
    var tagP_content = document.createTextNode('Debe rellenar el siguiente formulario para crear su perfil');    
    element_p.appendChild(tagP_content);

    document.body.appendChild(element_p); // Párrafo creado y vinculado

      
    // var div = cuerpo.getElementsByTagName('div');
    // div = div[0];
    // var formulario = document.createElement('form');
    // var atribForm = document.createAttribute('name');
    // atribForm.appendChild(document.createTextNode('perfilUser'));

    // formulario.appendChild();

}

function validateForm(){
    
}