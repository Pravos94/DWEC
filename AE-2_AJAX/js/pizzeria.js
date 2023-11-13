
// const URL_DESTINO = "http://localhost:5500/DWEC/AE-2_AJAX/" 
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"

const RECURSO = "datosPizzeria.json"

window.onload = function () { // usamos este evento que se desencadena tras pintarse todo el html

    cargarDatosJson();

    asignarEventos();

}

function cargarDatosJson() {

    let xmlHttp = new XMLHttpRequest() // creamos la conexión HTTP

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true) // true lo hace Asíncrono
    try {
        xmlHttp.send() // al ser GET puede ir sin nada o con valor NULL
    } catch (error) {
        console.log("mierroreseste: ", error)
    }


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

    rellenarIngredientes(ingredientes)

}

function rellenarTamaños(tamañosPizza) {

    console.log("Json de datos de los tamaños", tamañosPizza)

    let precioTam = 0
    let tamPizzaImg = 0;

    for (let tamaño of tamañosPizza) {

        tamPizzaImg += 32;
        precioTam += 5

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

        eLabel.appendChild(txtLabel)
        eCheckbox.appendChild(txtCheckbox);
        eCheckbox.required = true;
        eCheckbox.checked = true;

        divTamaños.appendChild(eCheckbox);
        divTamaños.appendChild(eLabel);
        divTamaños.appendChild(ePizza);

    }

}

function rellenarIngredientes(ingredientes) {

    console.log("Json de datos de los ingredientes", ingredientes)

    for (let ingr of ingredientes) {

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

        divIngredientes.appendChild(eCheckbox);
        divIngredientes.appendChild(eLabel);
        divIngredientes.appendChild(SaltoLinea);

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

function validaIngredientes() {

    var checks = document.childNodes.item('input')
    var checksIngr = divIngredientes.childNodes

    console.log("ingredientes", checksIngr)

    if (tamaños.eCheckbox = true(preciofinal)) {
        preciofinal = preciofinal + tamaños.value(precioTam);

        alert("Su pedido es: " + preciofinal)
    }

}