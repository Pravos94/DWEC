
const URL_DESTINO = "http://localhost:5500/AE-2_AJAX/"
const RECURSO = "datosPizzeria.json"

window.onload = function () {

    cargarDatosJson()

    function cargarDatosJson() {

        let xmlHttp = new XMLHttpRequest()

        xmlHttp.send() // al ser GET puede ir sin nada o con valor NULL

        xmlHttp.onload = function () {

            // rellenarFormulario(this.responseText)

            console.log("Json de datos de la Pizzeria", this.responseText)
        }

    }
}