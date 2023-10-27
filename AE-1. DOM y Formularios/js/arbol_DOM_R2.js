/* Creacción del HTML a través del DOM en JS */

function cargarDOM_R2(){

    // var div1 = document.getElementById('div1');
    document.body.appendChild(div1);

    var newH3 = document.createElement('h3');
    var newContentH3 = document.createTextNode('Bienvenidos a su Pizzería Mayor');
    newH3.appendChild(newContentH3);

    document.body.insertBefore(newH3, div1)   // titulo creado y vinculado

    /// --- Fin H3 --- ///
    

    //Declaro los saltos de linea
    var SaltoLinea = document.createElement('br');
    
    //Declaramos variables formulario y bordes del form
    var formulario = document.createElement('form');
    var fieldset = document.createElement('fieldset');
    var element_legend = document.createElement('legend');
    var tagLegend_content = document.createTextNode('Debe rellenar el siguiente formulario para dar de alta su pedido: ');    
    element_legend.appendChild(tagLegend_content);

    fieldset.appendChild(element_legend); // Párrafo creado y vinculado

    div1.appendChild(formulario);
    formulario.appendChild(fieldset);

   //  formulario.setAttribute('method', "post"); //Asignar el atributo method
   //  formulario.setAttribute('action', ""); //Asignar el atributo action');

    //Declaro las variables de los primeros cuadros y los textos a usar
    var newNombre = document.createElement('input', id="fNombre");    
    newNombre.autofocus = true;
    newNombre.required = true;
    var newDireccion = document.createElement('input', id="fDireccion");
    newDireccion.required = true;
    var newTelef = document.createElement('input', id="fTelef");
    newTelef.required = true;
    var newEmail = document.createElement('input', id="fEmail");
    newEmail.required = true;
    var tagContent_Nombre = document.createTextNode('Nombre: ');    
    var tagContent_Direccion = document.createTextNode('Dirección: ');
    var tagContent_Telef = document.createTextNode('Teléfono: ');
    var tagContent_Email = document.createTextNode('Email: ');
    var icon_Telef = document.createElement('img');
    icon_Telef.setAttribute('src','img/llamada.png');
    icon_Telef.setAttribute('alt','Icono Llamada');

    var icon_Casa = document.createElement('img');
    icon_Casa.setAttribute('src','img/casa.gif');
    icon_Casa.setAttribute('alt','Icono Casa');
    icon_Casa.setAttribute('style','width:16px;height:16px');

    //De esta fomra cambiamos el tipo de atributo
    newTelef.setAttribute("type", "Number");

    //Generamos el Nombre
    fieldset.appendChild(tagContent_Nombre);
    fieldset.appendChild(newNombre);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Nombre")

    //Generamos la Direccion
    fieldset.appendChild(tagContent_Direccion);
    fieldset.appendChild(newDireccion);
    fieldset.appendChild(icon_Casa);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Direccion")

    //Generamos el Telefono
    fieldset.appendChild(tagContent_Telef);
    fieldset.appendChild(newTelef);
    fieldset.appendChild(icon_Telef);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Telefono");
   
    //Generamos el Email
    fieldset.appendChild(tagContent_Email);
    fieldset.appendChild(newEmail);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    console.log("se ha generado casilla Email");

    /*Fin de Cuadros de texto*/
    
    var element_p2 = document.createElement('p');
    var tagP2_content = document.createTextNode('Elija tamaño de Pizza: ');    
    element_p2.appendChild(tagP2_content);

    fieldset.appendChild(element_p2);
   

    var newRadio = document.createElement('input');
    var newRadio2 = document.createElement('input');
    var newRadio3 = document.createElement('input');    
    var tagContent_Pequeña = document.createTextNode(' Pequeña');
    var tagContent_Mediana = document.createTextNode(' Mediana');
    var tagContent_Grande = document.createTextNode(' Grande');
    
    //modificamos los atributos a tipo radio
    newRadio.setAttribute("type", "radio");
    newRadio.setAttribute("name", "r1");
    newRadio2.setAttribute("type", "radio");
    newRadio2.setAttribute("name", "r1");
    newRadio3.setAttribute("type", "radio");
    newRadio3.setAttribute("name", "r1");

    // generamos radio buttons
    fieldset.appendChild(newRadio);
    fieldset.appendChild(tagContent_Pequeña);
    newRadio.required = true;

    fieldset.appendChild(newRadio2);
    fieldset.appendChild(tagContent_Mediana);
    newRadio2.required = true;

    fieldset.appendChild(newRadio3);
    fieldset.appendChild(tagContent_Grande);
    newRadio3.required = true;

    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));

    //Texto nuevo
    var element_p4 = document.createElement('p');
    var tagP4_content = document.createTextNode('¿Qué ingredientes ponemos? ');    
    element_p4.appendChild(tagP4_content);
    
    fieldset.appendChild(element_p4);

    //Iniciamos los CheckBox    
    //Declaramos las variables y cambiamos atributos.
    var newCheckBox1 = document.createElement('input');         
    var newCheckBox2 = document.createElement('input');         
    var newCheckBox3 = document.createElement('input');         
    var newCheckBox4 = document.createElement('input');         
    var tagContent_BC = document.createTextNode(' Bacon Crispy');
    var tagContent_PE = document.createTextNode(' Pepperoni');
    var tagContent_CH = document.createTextNode(' Champiñón');
    var tagContent_CE = document.createTextNode(' Cebolla');
    newCheckBox1.setAttribute("type", "Checkbox");
    newCheckBox2.setAttribute("type", "Checkbox");
    newCheckBox3.setAttribute("type", "Checkbox");
    newCheckBox4.setAttribute("type", "Checkbox");

    //Generamos los CheckBoxs
    fieldset.appendChild(newCheckBox1);
    fieldset.appendChild(tagContent_BC);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    
    // document.querySelector

    fieldset.appendChild(newCheckBox2);
    fieldset.appendChild(tagContent_PE);
    fieldset.appendChild(SaltoLinea.cloneNode(true));

    fieldset.appendChild(newCheckBox3);
    fieldset.appendChild(tagContent_CH);
    fieldset.appendChild(SaltoLinea.cloneNode(true));

    fieldset.appendChild(newCheckBox4);
    fieldset.appendChild(tagContent_CE);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));

        //Generar Boton de Submit        
		
        var newBoton1 = document.createElement('input'); 
        newBoton1.setAttribute("type", "submit");
        newBoton1.setAttribute("value", "submit");

        fieldset.appendChild(newBoton1);

}

function calcularPrecio(){

}