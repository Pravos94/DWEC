import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVideojuegosComponent } from './components/listado-videojuegos/listado-videojuegos.component';
import { DetalleVidejuegoComponent } from './components/detalle-videojuego/detalle-videojuego.component';
import { DetalleSobreMiComponent } from './components/detalles-sobre-mi/detalles-sobre-mi.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';

/*
Este fichero es donde configuraremos las rutas de la aplicación.

const routes: Routes = [];
*/
const routes: Routes = [
  {
    path : '', 
    component : ListadoVideojuegosComponent
  },
  {
    path : 'detalle', 
    component : DetalleVidejuegoComponent
  },
  {
    path : 'datosPersonales', 
    component : DetalleSobreMiComponent
  },
  {
    path : 'datosContacto', 
    component : DatosContactoComponent
  },
  {path : 'home', component : ListadoVideojuegosComponent},
  //aqui estamos pasando parametros en el pahtparam, eje: componente1/spiderman/marvel
  {path : 'detalle/:identificador/:valoracion', component : DetalleVidejuegoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}