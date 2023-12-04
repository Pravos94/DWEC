import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../../modal/Juego';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVidejuegoComponent implements OnInit {

 juego: Juego = {
   identificador: undefined,
   titulo: undefined,
   compania: undefined,
   imagen: undefined,
   valoracion: undefined
 }
 tituloJuego: string = ""
 imagenJuego: string = ""
 valoracion: string = ""
  //INYECCIÓN DE DEPENDENCIAS EN ANGULAR
  //Cuando nosotros no creamos un objeto y le pedimos a un tercero (Angular) que nos lo cree
  //y nos de su referencia

  //En Angular, podemos solicitar en el constructor de un componente que nos inyecte objetos
  
  //En este caso, le solicitaremos un objeto de tipo ActivatedRoute, que es una clase 
  //cuyas instancias representan a la ruta presente en la barra de navegación
  //Basicamente se usa para recoger parámetros que nos envian otros componentes

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
       this.imagenJuego= params['imagen']
      this.tituloJuego= params['juego']
      this.valoracion = params['valoracion']
    })

  }

}
