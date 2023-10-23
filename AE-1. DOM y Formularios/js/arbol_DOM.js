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

    /*Intento de Cajas de texto @Miguel*/

    //Declaro los saltos de linea
    var SaltoLinea = document.createElement('br');
    
    //Declaro las variables de los primeros cuadros y los textos a usar
    var newNombre = document.createElement('input', id="fNombre");    
    var newApellido = document.createElement('input', id="fApellido");
    var newDNI = document.createElement('input', id="fDNI");
    var newDireccion = document.createElement('input', id="fDireccion");
    var newTelef = document.createElement('input', id="fTelef");
    var tagContent_Nombre = document.createTextNode('Nombre: ');
    var tagContent_Apellido = document.createTextNode('Apellidos: ');
    var tagContent_DNI = document.createTextNode('DNI/NIE: ');
    var tagContent_Direccion = document.createTextNode('Dirección: ');
    var tagContent_Telef = document.createTextNode('Teléfono: ');

    //De esta fomra cambiamos el tipo de atributo
    newTelef.setAttribute("type", "Number");

    //Generamos el Nombre
    document.body.appendChild(tagContent_Nombre);
    document.body.appendChild(newNombre);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Nombre")

    //Generamos el apellido
    document.body.appendChild(tagContent_Apellido);
    document.body.appendChild(newApellido);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Apellido")

    //Generamos el DNI
    document.body.appendChild(tagContent_DNI);
    document.body.appendChild(newDNI);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla DNI")

    //Generamos la Direccion
    document.body.appendChild(tagContent_Direccion);
    document.body.appendChild(newDireccion);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Direccion")

    //Generamos el Telefono
    document.body.appendChild(tagContent_Telef);
    document.body.appendChild(newTelef);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Telefono");

    /*Fin de Cuadros de texto*/
//-------------------------------------------------------------------------------------------------
    /* Intentamos  radio Buttons @Miguel*/

    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    var element_p2 = document.createElement('p');
    var tagP2_content = document.createTextNode('¿Qué cuenta desea Crear? ');    
    element_p2.appendChild(tagP2_content);

    document.body.appendChild(element_p2);
    document.body.appendChild(SaltoLinea.cloneNode(true));

    //Espacios para separar los elementos
    
  
    var newRadio = document.createElement('input');
    var newRadio2 = document.createElement('input');
    var newRadio3 = document.createElement('input');
    var newRadio4 = document.createElement('input'); 
    var newRadio5 = document.createElement('input');
    var newRadio6 = document.createElement('input'); 
    var newRadio7 = document.createElement('input');
    var newRadio8 = document.createElement('input');         
    var tagContent_Cuenta1 = document.createTextNode(' Cuenta Joven');
    var tagContent_Cuenta2 = document.createTextNode(' Cuenta Adulto');
    var tagContent_Cuenta3 = document.createTextNode(' Cuenta Jubileta');
    var tagContent_Cuenta4 = document.createTextNode(' Cuenta Empresarial');
    var tagContent_banco1 = document.createTextNode(' ING');
    var tagContent_banco2 = document.createTextNode(' CaixaBank');
    var tagContent_banco3 = document.createTextNode(' Santander');
    var tagContent_banco4 = document.createTextNode(' Caja Rural');
    
    //modificamos los atributos a tipo radio
    newRadio.setAttribute("type", "radio");
    newRadio.setAttribute("name", "r1");
    newRadio2.setAttribute("type", "radio");
    newRadio2.setAttribute("name", "r1");
    newRadio3.setAttribute("type", "radio");
    newRadio3.setAttribute("name", "r1");
    newRadio4.setAttribute("type", "radio");
    newRadio4.setAttribute("name", "r1");
    newRadio5.setAttribute("type", "radio");
    newRadio5.setAttribute("name", "r2");
    newRadio6.setAttribute("type", "radio");
    newRadio6.setAttribute("name", "r2");
    newRadio7.setAttribute("type", "radio");
    newRadio7.setAttribute("name", "r2");
    newRadio8.setAttribute("type", "radio");
    newRadio8.setAttribute("name", "r2");

    // generamos radio buttons
    document.body.appendChild(newRadio);
    document.body.appendChild(tagContent_Cuenta1);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    document.body.appendChild(newRadio2);
    document.body.appendChild(tagContent_Cuenta2);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    document.body.appendChild(newRadio3);
    document.body.appendChild(tagContent_Cuenta3);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    document.body.appendChild(newRadio4);
    document.body.appendChild(tagContent_Cuenta4);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    // Siguientes Radio buttons


    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    var element_p3 = document.createElement('p');
    var tagP3_content = document.createTextNode('¿Qué cuenta desea Entidad bancaría le gustaría? ');    
    element_p3.appendChild(tagP3_content);

    document.body.appendChild(element_p3);

    
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    
    document.body.appendChild(newRadio5);
    document.body.appendChild(tagContent_banco1);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    document.body.appendChild(newRadio6);
    document.body.appendChild(tagContent_banco2);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    document.body.appendChild(newRadio7);
    document.body.appendChild(tagContent_banco3);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    
    document.body.appendChild(newRadio8);
    document.body.appendChild(tagContent_banco4);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
 
    //Fin radio Buttons @Miguel

    //Iniciamos los CheckBox

    //Texto nuevo
    var element_p4 = document.createElement('p');
    var tagP4_content = document.createTextNode('¿Qué tarjeta/s necesitarías? ');    
    element_p4.appendChild(tagP4_content);
    
    document.body.appendChild(element_p4);
   

    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
 
    //Declaramos las variables y cambiamos atributos.
    var newCheckBox1 = document.createElement('input');         
    var newCheckBox2 = document.createElement('input');         
    var newCheckBox3 = document.createElement('input');         
    var tagContent_TP = document.createTextNode(' Tarjeta Prepago');
    var tagContent_TC = document.createTextNode(' Tarjeta Crédito');
    var tagContent_TD = document.createTextNode(' Tarjeta Débito');
    newCheckBox1.setAttribute("type", "Checkbox");
    newCheckBox2.setAttribute("type", "Checkbox");
    newCheckBox3.setAttribute("type", "Checkbox");

    //Generamos los CheckBoxs
    document.body.appendChild(newCheckBox1);
    document.body.appendChild(tagContent_TP);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    document.body.appendChild(newCheckBox2);
    document.body.appendChild(tagContent_TC);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    document.body.appendChild(newCheckBox3);
    document.body.appendChild(tagContent_TD);
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    //Fin de los CheckBoxs @Miguel

    //Iniciamos Select

       //Texto nuevo
       var element_p5 = document.createElement('p');
       var tagP5_content = document.createTextNode('¿Qué método de pago desea en su tarjeta? ');    
       element_p5.appendChild(tagP5_content);
       
       document.body.appendChild(element_p5);

       //Declaramos variable
    //    var newSelect = document.createElement('input');         
    //    newSelect.setAttribute("type", "select");
    //    document.body.appendChild(newSelect);
       var element_select = document.createElement('select');      
       element_select.setAttribute("id", "MetodoPago_JS");
    //    var tagSelect_content = document.createTextNode('');
    //    element_p5.appendChild(tagSelect_content);

       var element_Option0 = document.createElement('option'); 
       element_Option0.setAttribute("value", "0");
       var tagOption0_content = document.createTextNode('Diario');
       element_Option0.appendChild(tagOption0_content);      

       var element_Option1 = document.createElement('option');
       element_Option1.setAttribute("value", "1"); 
       var tagOption1_content = document.createTextNode('Mensual');
       element_Option1.appendChild(tagOption1_content);

       var element_Option2 = document.createElement('option');
       element_Option2.setAttribute("value", "2"); 
       var tagOption2_content = document.createTextNode('Trimestral');
       element_Option2.appendChild(tagOption2_content);

       var element_Option3 = document.createElement('option');
       element_Option3.setAttribute("value", "3"); 
       var tagOption3_content = document.createTextNode('Quincenal');
       element_Option3.appendChild(tagOption3_content);

       var element_Option4 = document.createElement('option');
       element_Option4.setAttribute("value", "4"); 
       var tagOption4_content = document.createTextNode('Anual');
       element_Option4.appendChild(tagOption4_content);

       element_select.appendChild(element_Option0);
       element_select.appendChild(element_Option1);
       element_select.appendChild(element_Option2);
       element_select.appendChild(element_Option3);
       element_select.appendChild(element_Option4);

       document.body.appendChild(element_select);


    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));
    document.body.appendChild(SaltoLinea.cloneNode(true));

    //Fin de los Select

    //Iniciamos Text Area

       //Texto nuevo
       var element_p5 = document.createElement('p');
       var tagP5_content = document.createTextNode('Desea añadir información adicional: ');    
       element_p5.appendChild(tagP5_content);
       
       document.body.appendChild(element_p5);


       document.body.appendChild(SaltoLinea.cloneNode(true));
       document.body.appendChild(SaltoLinea.cloneNode(true));

       //Declaramos variables

    //    var newTA1 = document.createElement('input');         
    //    newTA1.setAttribute("type", "textarea");
       var newTA1 = document.createElement('textarea');         
       newTA1.setAttribute("id", "observaciones_JS");

       document.body.appendChild(newTA1);

       //Igual Que el Select, no lo reconoce HTML


       document.body.appendChild(SaltoLinea.cloneNode(true));
       document.body.appendChild(SaltoLinea.cloneNode(true));
       document.body.appendChild(SaltoLinea.cloneNode(true));
   
       //Fin de los TextArea
   
       //Iniciamos CheckBox2
   
        //Declaramos las variables y cambiamos atributos.
        var newCheckBox4 = document.createElement('input');         
        var newCheckBox5 = document.createElement('input');         
        var tagContent_Info1 = document.createTextNode(' He leído y acepto las condiciones de privacidad');
        var tagContent_Info2 = document.createTextNode(' Soy mayor de edad');
        newCheckBox4.setAttribute("type", "Checkbox");
        newCheckBox5.setAttribute("type", "Checkbox");
        
        //Generamos los CheckBoxs2
        document.body.appendChild(newCheckBox4);
        document.body.appendChild(tagContent_Info1);
        document.body.appendChild(SaltoLinea.cloneNode(true));
        document.body.appendChild(SaltoLinea.cloneNode(true));

        document.body.appendChild(newCheckBox5);
        document.body.appendChild(tagContent_Info2);
        document.body.appendChild(SaltoLinea.cloneNode(true));
        document.body.appendChild(SaltoLinea.cloneNode(true));
        
        //Fin de los CheckBox2 @Miguel

        //Generar Boton de Submit        
		
        var newBoton1 = document.createElement('input'); 
        newBoton1.setAttribute("type", "submit");
        newBoton1.setAttribute("value", "submit");

        document.body.appendChild(newBoton1);

}



function validateForm(){
    
}