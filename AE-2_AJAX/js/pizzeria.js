
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"
const RECURSO = "datosPizzeria.json"

window.onload = function () { // usamos este evento que se desencadena tras pintarse todo el html

    cargarDatosJson()

    validaciones()

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

    rellenarIngredientes(ingredientes)

}

function rellenarTamaños(tamañosPizza) {

    console.log("Json de datos de los tamaños", tamañosPizza)

    let precioTam = 0

    for (let tamaño of tamañosPizza) {

        precioTam += 5

        var eCheckbox = document.createElement('input');
        var eLabel = document.createElement('label')
        var txtCheckbox = document.createTextNode(tamaño);
        var txtLabel = document.createTextNode(tamaño);


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


function validaciones(evento) {

    console.log('myForm', myForm);

    let elements = myForm.childNodes

    console.log('elements', elements)

    myForm.addEventListener("submit", function (evento) {
        myForm.preventDefault();

        alert('entro')

        console.log('es un evento', evento)
        // validaciones(evento)

    })

    validaEmail(evento)

    validaIngredientes(evento)
}

function validaEmail() {

}

function validaIngredientes() {

}