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

    formulario.setAttribute('method', "post"); //Asignar el atributo method
    formulario.setAttribute('action', ""); //Asignar el atributo action');
    formulario.setAttribute('id', "miformulario"); //Asignar el atributo action');

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
    // console.log("se ha generado casilla Nombre")

    //Generamos la Direccion
    fieldset.appendChild(tagContent_Direccion);
    fieldset.appendChild(newDireccion);
    fieldset.appendChild(icon_Casa);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    // console.log("se ha generado casilla Direccion")

    //Generamos el Telefono
    fieldset.appendChild(tagContent_Telef);
    fieldset.appendChild(newTelef);
    fieldset.appendChild(icon_Telef);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    // console.log("se ha generado casilla Telefono");
   
    //Generamos el Email
    fieldset.appendChild(tagContent_Email);
    fieldset.appendChild(newEmail);
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    fieldset.appendChild(SaltoLinea.cloneNode(true));
    // console.log("se ha generado casilla Email");

    /*Fin de Cuadros de texto*/
    
    var element_p2 = document.createElement('p');
    var tagP2_content = document.createTextNode('Elija tamaño de Pizza: ');    
    element_p2.appendChild(tagP2_content);

    fieldset.appendChild(element_p2);
   

    var newRadio_Peq = document.createElement('input');
    var newRadio_Med = document.createElement('input');
    var newRadio_Gra = document.createElement('input');    
    var tagContent_Pequeña = document.createTextNode(' Pequeña');
    var tagContent_Mediana = document.createTextNode(' Mediana');
    var tagContent_Grande = document.createTextNode(' Grande');
    
    //modificamos los atributos a tipo radio
    newRadio_Peq.setAttribute("type", "radio");
    newRadio_Peq.setAttribute("name", "r1");
    newRadio_Peq.setAttribute("value", 5);
    newRadio_Peq.setAttribute("id", 'TamPeq');

    newRadio_Med.setAttribute("type", "radio");
    newRadio_Med.setAttribute("name", "r1");
    newRadio_Med.setAttribute("value", 10);
    newRadio_Med.setAttribute("id", 'TamMed');

    newRadio_Gra.setAttribute("type", "radio");
    newRadio_Gra.setAttribute("name", "r1");
    newRadio_Gra.setAttribute("value", 15);
    newRadio_Gra.setAttribute("id", 'TamGra');

    // generamos radio buttons
    fieldset.appendChild(newRadio_Peq);
    fieldset.appendChild(tagContent_Pequeña);
    newRadio_Peq.required = true;

    fieldset.appendChild(newRadio_Med);
    fieldset.appendChild(tagContent_Mediana);
    newRadio_Med.required = true;

    fieldset.appendChild(newRadio_Gra);
    fieldset.appendChild(tagContent_Grande);
    newRadio_Gra.required = true;

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
    newCheckBox1.setAttribute("value", 1);
    newCheckBox1.setAttribute("id", 'Ingrediente_Bacon');
    newCheckBox2.setAttribute("type", "Checkbox");
    newCheckBox2.setAttribute("value", 1);
    newCheckBox2.setAttribute("id", 'Ingrediente_Pepperoni');
    newCheckBox3.setAttribute("type", "Checkbox");
    newCheckBox3.setAttribute("value", 1);
    newCheckBox3.setAttribute("id", 'Ingrediente_Champiñon');
    newCheckBox4.setAttribute("type", "Checkbox");
    newCheckBox4.setAttribute("value", 1);
    newCheckBox4.setAttribute("id", 'Ingrediente_Cebolla');

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
		
        var btnSubmit = document.createElement('input'); 
        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("value", "Procesar Pedido");
        // btnSubmit.onclick=calcularPrecio;

        //btnSubmit.setAttribute("onclick", calcularPrecio);
        console.log ("se ha generado boton");

        fieldset.appendChild(btnSubmit);

        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // con este método el form no se envia solo
            
            var inputs = formulario.querySelectorAll('input');

            console.log("formulario" ,  formulario);

            calcularPrecio(inputs);

        })
        
        
        
        function calcularPrecio(inputs){

            let precioTotal = 0;
            inputs.forEach(element => {
                console.log("element name:"+element.name+"/valor:"+element.value);
                
                if((element.name == 'r1' || element.type == 'checkbox') && element.checked) {
                     console.log(" valor: "+element.value);
 
                     precioTotal += parseInt(element.value); // sumamos precio del producto marcado
                }
 
             });

            var printFactura = document.createElement('p');
            var Contenido_Factura = document.createTextNode('Has Comprado una pizza por '+ precioTotal +' €');            
            
            printFactura.appendChild(Contenido_Factura);

            document.body.appendChild(printFactura);
            console.log('Se realiza Compra');
            console.log(Contenido_Factura);

        }

}
