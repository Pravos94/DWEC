
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
    var datosPizzeria = JSON.parse(responseText) // convierte el texto a JSON

    console.log("Json de datos de la Pizzeria", datosPizzeria)

    var tamañosPizza = datosPizzeria.tamaños

    rellenarTamaños(tamañosPizza)

    var ingredientes = datosPizzeria.ingredientes

    rellenarIngredientes(ingredientes)

}

function rellenarTamaños(tamañosPizza) {

    console.log("Json de datos de los tamaños", tamañosPizza)

    var tamPizzaImg = 0;

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

            eLabel.appendChild(txtLabel)
            eCheckbox.appendChild(txtCheckbox);
            eCheckbox.required = true;
            eCheckbox.checked = true;

            divTamaños.appendChild(eCheckbox);
            divTamaños.appendChild(eLabel);
            divTamaños.appendChild(ePizza);
        }
    }

}

function rellenarIngredientes(ingredientes) {

    console.log("Json de datos de los ingredientes", ingredientes)

    for (let ingr in ingredientes) {
        if (ingredientes.hasOwnProperty(ingr)) {

            var eCheckbox = document.createElement('input');
            var eLabel = document.createElement('label')
            var txtCheckbox = document.createTextNode(ingr);
            var txtLabel = document.createTextNode(ingr);
            var valueLabel = new Number(ingredientes[ingr])

            var SaltoLinea = document.createElement('br');


            eCheckbox.setAttribute("type", "Checkbox");
            eCheckbox.setAttribute("value", valueLabel);
            eCheckbox.setAttribute("id", ingr.length > 3 ? 'ing' + ingr.substring(0, 4) : 'ing' + ingr);

            eLabel.appendChild(txtLabel)
            eCheckbox.appendChild(txtCheckbox);

            divIngredientes.appendChild(eCheckbox);
            divIngredientes.appendChild(eLabel);
            divIngredientes.appendChild(SaltoLinea);
        }
    }
}

function asignarEventos() {
    var email = document.getElementById("email")
    var btnEnviar = document.getElementById("btnEnviar")
    var btnActualizar = document.getElementById("btnActualizar")
    
    email.addEventListener("blur", validaEmail)
    btnEnviar.addEventListener("click", validaciones)
    btnActualizar.addEventListener("click", funcionRecargaDatos)

}

function funcionRecargaDatos() {
    location.reload()
}

function validaciones(e) {
    e.preventDefault()
    e.stopPropagation()
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

    var preciofinal = 0;
    
    // Calculamos los precios de la pizza dependiendo de la que haya chekeado o marcado en el html
    var PizzaPeque = document.getElementById("Pequ")
    if (PizzaPeque.checked){
        preciofinal = preciofinal + new Number(PizzaPeque.value) 
    }
    var PizzaMediana = document.getElementById("Medi")
    if (PizzaMediana.checked){
        preciofinal = preciofinal + new Number(PizzaMediana.value)
    }
    var PizzaGrande = document.getElementById("Gran")
    if (PizzaGrande.checked){
        preciofinal = preciofinal + new Number(PizzaGrande.value)
    }

    //Calculamos el precio final con los ingrdientes añadidos
    var ingrediBacon = document.getElementById("ingBaco")
    if (ingrediBacon.checked){
        preciofinal = preciofinal + new Number(ingrediBacon.value) 
    }
    var ingrediPeppe = document.getElementById("ingPepp")
    if (ingrediPeppe.checked){
        preciofinal = preciofinal + new Number(ingrediPeppe.value)
    }
    var ingrediCham = document.getElementById("ingCham")
    if (ingrediCham.checked){
        preciofinal = preciofinal + new Number(ingrediCham.value) 
    }
    var ingrediCebo = document.getElementById("ingCebo")
    if (ingrediCebo.checked){
        preciofinal = preciofinal + new Number(ingrediCebo.value) 
    }
    var ingrediPiña = document.getElementById("ingPiña")
    if (ingrediPiña.checked){
        preciofinal = preciofinal + new Number(ingrediPiña.value) 
    }
    var ingrediAcei = document.getElementById("ingAcei")
    if (ingrediAcei.checked){
        preciofinal = preciofinal + new Number(ingrediAcei.value) 
    }

    alert("El precio final del Usuario es "+ preciofinal+ " €")
    
    
}
