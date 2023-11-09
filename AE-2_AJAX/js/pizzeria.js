
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"
const RECURSO = "datosPizzeria.json"

window.onload = function () { // usamos este evento que se desencadena tras pintarse todo el html

    cargarDatosJson()

    function cargarDatosJson() { 

        let xmlHttp = new XMLHttpRequest() // creamos la conexión HTTP

        xmlHttp.open('GET', URL_DESTINO + RECURSO, true) // true lo hace Asíncrono
        xmlHttp.send() // al ser GET puede ir sin nada o con valor NULL

        xmlHttp.onload = function () {

            // rellenarFormulario(this.responseText)

            console.log("Json de datos de la Pizzeria", this.responseText)
        }

    }
}