import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../modal/Juego';

@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {
  datosJuegos: Array<Juego> | undefined;

  @Input() nameUser!: string;

  constructor() {
    this.datosJuegos = [];
  
    this.datosJuegos.push(new Juego(1, "The Witcher 3: Wild Hunt", "CD Projekt Red", "/img/witcher3.jpg", '9 / 10'));
    this.datosJuegos.push(new Juego(2, "The Legend of Zelda: Breath of the Wild", "Nintendo", "/img/zelda.jpg", '10 / 10'));
    this.datosJuegos.push(new Juego(3, "Red Dead Redemption 2", "Rockstar Games", "/img/red.jpg", '9.5 / 10'));
    this.datosJuegos.push(new Juego(4, "God of War", "Santa Monica Studio", "/img/war.jpg", '9.7 / 10'));
    this.datosJuegos.push(new Juego(5, "Diablo", "Atlus", "/img/diablo1_1.jpg", '8.7 / 10'));
    
  }

  ngOnInit() {

    console.log('Datos JkuJuegos', this.datosJuegos);

  }
}
