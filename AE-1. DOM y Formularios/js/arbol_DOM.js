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
    var tagP_content = document.createTextNode('Debe rellenar el siguiente formulario para crear su perfil: ');    
    element_p.appendChild(tagP_content);

    document.body.appendChild(element_p); // Párrafo creado y vinculado

      
    // var div = cuerpo.getElementsByTagName('div');
    // div = div[0];
    // var formulario = document.createElement('form');
    // var atribForm = document.createAttribute('name');
    // atribForm.appendChild(document.createTextNode('perfilUser'));

    // formulario.appendChild();

    /*Intento de Creadion de texto "Nombre: "*/
    var SaltoLinea = document.createElement('br');
    

    var TypeText = document.createElement('type' , Text);
    var TypeNumber = document.createElement('type', Number);
    var newNombre = document.createElement('input', TypeText, id="fNombre");    
    var newApellido = document.createElement('input', TypeText, id="fApellido");
    var newDNI = document.createElement('input', TypeText, id="fDNI");
    var newDireccion = document.createElement('input', TypeText, id="fDireccion");
    var newTelef = document.createElement('input', TypeNumber, id="fTelef");
    var tagContent_Nombre = document.createTextNode('Nombre: ');
    var tagContent_Apellido = document.createTextNode('Apellidos: ');
    var tagContent_DNI = document.createTextNode('DNI/NIE: ');
    var tagContent_Direccion = document.createTextNode('Dirección: ');
    var tagContent_Telef = document.createTextNode('Teléfono: ');
    

    document.body.appendChild(tagContent_Nombre);
    document.body.appendChild(newNombre);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Nombre")

    document.body.appendChild(tagContent_Apellido);
    document.body.appendChild(newApellido);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Apellido")

    document.body.appendChild(tagContent_DNI);
    document.body.appendChild(newDNI);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla DNI")

    document.body.appendChild(tagContent_Direccion);
    document.body.appendChild(newDireccion);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Direccion")

    document.body.appendChild(tagContent_Telef);
    document.body.appendChild(newTelef);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Telefono");

    /*Fin de Cuadros de texto*/

    

    

}

function validateForm(){
    
}