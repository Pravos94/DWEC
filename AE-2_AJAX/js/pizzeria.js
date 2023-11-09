
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"
const RECURSO = "datosPizzeria.json"

window.onload = function () { // usamos este evento que se desencadena tras pintarse todo el html

    cargarDatosJson()

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

        console.log("Json de datos de los tamaños", tamañosPizza)

        let precioTam = 0

        for (let tamaño of tamañosPizza) {

            precioTam += 5

            var eRadio = document.createElement('input');
            var eLabel = document.createElement('label')
            var txtRadio = document.createTextNode(tamaño);
            var txtLabel = document.createTextNode(tamaño);


            eRadio.setAttribute("type", "radio");
            eRadio.setAttribute("name", "r1");
            eRadio.setAttribute("value", precioTam);
            eRadio.setAttribute("id", tamaño.length > 3 ? tamaño.substring(0, 4) : tamaño);

            eLabel.appendChild(txtLabel)
            eRadio.appendChild(txtRadio);
            eRadio.required = true;
            eRadio.checked = true;

            divTamaños.appendChild(eRadio);
            divTamaños.appendChild(eLabel);

        }

        let ingredientes = datosPizzeria.ingredientes

        console.log("Json de datos de los ingredientes", ingredientes)

    }
}