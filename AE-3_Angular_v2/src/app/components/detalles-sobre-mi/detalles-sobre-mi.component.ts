import { Component, Input, OnInit } from '@angular/core';
import { Juego } from '../../modal/Juego';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-mios',
  templateUrl: './detalles-sobre-mi.component.html',
  styleUrls: ['./detalles-sobre-mi.component.css']
})
export class DetalleSobreMiComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
