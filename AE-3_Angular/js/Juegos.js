/* Creacción del HTML a través del DOM en JS */

const URL_DESTINO = "http://localhost:5500/AE-3_Angular/"

const RECURSO = "datosJuegos.ts"


let xmlHttp = new XMLHttpRequest() // creamos la conexión HTTP

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true) // true lo hace Asíncrono
    
    xmlHttp.send() // al ser GET puede ir sin nada o con valor NULL


window.onload = function (){

    cargarJuegos();

}


function cargarJuegos(){

    var cabecera = document.getElementsByTagName('head'); // extraemos una colección aunque solo haya uno
    cabecera = cabecera[0]; // nos quedamos con el único que hay y que queremos

    var cuerpo = document.getElementsByTagName('body');
    cuerpo = cuerpo[0];

    // var div1 = document.getElementById('div1');
    document.body.appendChild(div1);

    var newH3 = document.createElement('h3');
    var newContentH3 = document.createTextNode('Bienvenidos a su Listado de Juegos');
    newH3.appendChild(newContentH3);

    document.body.insertBefore(newH3, div1)   // titulo creado y vinculado


    // Parrafo 1
    var element_p = document.createElement('p');
    var tagP_content = document.createTextNode('Lista de videojuegos: ');    
    element_p.appendChild(tagP_content);

    div1.appendChild(element_p);

    //------------------------

    var juego1 = document.createElement('p');
    var ValoracionJ1 = document.createTextNode('8.7 / 10');
    var nombreJ1 = document.createTextNode('Diablo');
    const imgJ1 = document.createElement('img');
    const img2J1 = document.createElement('img');
    
    imgJ1.setAttribute    ('src','/img/diablo1_1.jpg');
    img2J1.setAttribute    ('src','/img/diablo1_2.jpg');
    imgJ1.setAttribute    ('alt','Portada Diablo' );
    img2J1.setAttribute   ('alt','Captura Diablo');
    imgJ1.setAttribute    ('id', "Img1");
    img2J1.setAttribute    ('id', "Img1_2");   
    imgJ1.setAttribute('style', 'width:' + 240 + 'px;height:' + 240 + 'px')
    img2J1.setAttribute('style', 'width:' + 240 + 'px;height:' + 240 + 'px')


    juego1.appendChild(nombreJ1);
    div1.appendChild(juego1);
    div1.appendChild(ValoracionJ1);
    document.body.appendChild(imgJ1);
    document.body.appendChild(img2J1);




}