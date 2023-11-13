
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"

const RECURSO = "datosPizzeria.json"

window.onload = function () { // usamos este evento que se desencadena tras pintarse todo el html

    cargarDatosJson();

    asignarEventos();

}

function cargarDatosJson() {

    let xmlHttp = new XMLHttpRequest() // creamos la conexión HTTP

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true) // true lo hace Asíncrono
    
    xmlHttp.send() // al ser GET puede ir sin nada o con valor NULL
    

    xmlHttp.onload = function () { // solo salta al finalizar la respuesta del SERVER

        console.log("Json de datos de la Pizzeria", this.responseText)

        rellenarFormulario(this.responseText)

    }
}

function rellenarFormulario(responseText) {
    let datosPizzeria = JSON.parse(responseText) // convierte el texto a JSON

    console.log("Json de datos de la Pizzeria", datosPizzeria)

    let tamañosPizza = datosPizzeria.tamaños

    rellenarTamaños(tamañosPizza)

    let ingredientes = datosPizzeria.ingredientes

    // rellenarIngredientes(ingredientes)

}

function rellenarTamaños(tamañosPizza) {

    console.log("Json de datos de los tamaños", tamañosPizza)

    let tamPizzaImg = 0;

    for (let tamaño in tamañosPizza) {

        if (tamañosPizza.hasOwnProperty(tamaño)) {

            precioTam = tamañosPizza[tamaño];

            console.log(`Propiedad: ${tamaño}`);
            console.log(`Valor: ${tamañosPizza[tamaño]}`);

            tamPizzaImg += 32;

            var eCheckbox = document.createElement('input');
            var eLabel = document.createElement('label')
            var txtCheckbox = document.createTextNode(tamaño);
            var txtLabel = document.createTextNode(tamaño);

            var ePizza = document.createElement('img');
            ePizza.setAttribute('src', "../img/pizza.png")
            ePizza.setAttribute('alt', "Icono Pizza " + tamaño)
            ePizza.setAttribute('style', 'width:' + tamPizzaImg + 'px;height:' + tamPizzaImg + 'px')


            eCheckbox.setAttribute("type", "radio");
            eCheckbox.setAttribute("name", "r1");
            eCheckbox.setAttribute("value", precioTam);
            eCheckbox.setAttribute("id", tamaño.length > 3 ? tamaño.substring(0, 4) : tamaño);

<<<<<<< HEAD
        eLabel.appendChild(txtLabel)
        eCheckbox.appendChild(txtCheckbox);
        eCheckbox.required = true;
        eCheckbox.checked = true;
            
        divTamaños.appendChild(eCheckbox);
        divTamaños.appendChild(eLabel);
        divTamaños.appendChild(ePizza);
        
        console.log("El id es "+ eCheckbox.id + " del ingrediente "+eCheckbox.name+ " con valor "+eCheckbox.value);
=======
            eLabel.appendChild(txtLabel)
            eCheckbox.appendChild(txtCheckbox);
            eCheckbox.required = true;
            eCheckbox.checked = true;
>>>>>>> 355db8657a4482ca69ba129ed5a00b9297f6a399

            divTamaños.appendChild(eCheckbox);
            divTamaños.appendChild(eLabel);
            divTamaños.appendChild(ePizza);
        }
    }

}

function rellenarIngredientes(ingredientes) {

    console.log("Json de datos de los ingredientes", ingredientes)

    for (let ingr in ingredientes) {

        if (tamañosPizza.hasOwnProperty(ingr)) {

            var eCheckbox = document.createElement('input');
            var eLabel = document.createElement('label')
            var txtCheckbox = document.createTextNode(ingr);
            var txtLabel = document.createTextNode(ingr);

            var SaltoLinea = document.createElement('br');


            eCheckbox.setAttribute("type", "Checkbox");
            eCheckbox.setAttribute("value", 1);
            eCheckbox.setAttribute("id", ingr.length > 3 ? 'ing' + ingr.substring(0, 4) : 'ing' + ingr);

            eLabel.appendChild(txtLabel)
            eCheckbox.appendChild(txtCheckbox);

<<<<<<< HEAD
        console.log("El id es "+ eCheckbox.id + " del ingrediente "+eCheckbox.name + " con valor "+eCheckbox.value);

=======
            divIngredientes.appendChild(eCheckbox);
            divIngredientes.appendChild(eLabel);
            divIngredientes.appendChild(SaltoLinea);
        }
>>>>>>> 355db8657a4482ca69ba129ed5a00b9297f6a399
    }
}

function asignarEventos() {

    email.addEventListener("blur", validaEmail)
    btnEnviar.addEventListener("click", validaciones)
    btnActualizar.addEventListener("click", cargarDatosJson)

}

function validaciones() {

    validaEmail()

    validaIngredientes()
}

function validaEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var campoEmail = document.getElementById("email");
    if (campoEmail.value.match(validRegex)) {
        if (eErrEmail != null) {
            // eErrEmail.parentElement.removeChild(eErrEmail)
            eErrEmail.textContent = '';
        }
    } else {
        eErrEmail.textContent = 'Email no válido';

        //eErrEmail.setAttribute('id', 'eErrEmail')
        eErrEmail.setAttribute('style', 'color:red')

        // eErrEmail.appendChild(txtErrEmail)

        // campoEmail.appendChild(eErrEmail);

    }
}

<<<<<<< HEAD
function validaIngredientes(event) {
=======
function validaIngredientes() {

    var checks = document.childNodes.item('input')
    var checksIngr = divIngredientes.childNodes

    console.log("ingredientes", checksIngr)

    if (tamaños.eCheckbox = true(preciofinal)) {
        preciofinal = preciofinal + tamaños.value(precioTam);
>>>>>>> 355db8657a4482ca69ba129ed5a00b9297f6a399

    var preciofinal = 0;
    
    // Calculamos los precios de la pizza dependiendo de la que haya chekeado o marcado en el html
    if (document.getElementById("Pequ").checked){
        preciofinal = preciofinal + 5; // document.getElementById("Pequ").value;
    }
    if (document.getElementById("Medi").checked){
        preciofinal = preciofinal + 10; //document.getElementById("Medi").value;
    }
    if (document.getElementById("Gran").checked){
        preciofinal = preciofinal + 15; //document.getElementById("Gran").value;
    }

    //Calculamos el precio final con los ingrdientes añadidos

    if (document.getElementById("ingBaco").checked){
        preciofinal = preciofinal + 1 // document.getElementById("Pequ").value;
    }
    if (document.getElementById("ingPepp").checked){
        preciofinal = preciofinal + 1 // document.getElementById("Medi").value;
    }
    if (document.getElementById("ingCham").checked){
        preciofinal = preciofinal + 1 // document.getElementById("Gran").value;
    }
    if (document.getElementById("ingCebo").checked){
        preciofinal = preciofinal + 1 // document.getElementById("Pequ").value;
    }
    if (document.getElementById("ingPiña").checked){
        preciofinal = preciofinal + 1 // document.getElementById("Medi").value;
    }

    console.log ("El precio final del Usuario es "+ preciofinal)
    //alert ("Su precio final es: "+ preciofinal);
}