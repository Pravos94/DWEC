import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoVideojuegosComponent } from './components/listado-videojuegos/listado-videojuegos.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleVidejuegoComponent } from './components/detalle-videojuego/detalle-videojuego.component';
import { DetalleSobreMiComponent } from './components/detalles-sobre-mi/detalles-sobre-mi.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';

@NgModule({
  declarations: [			
    AppComponent,
      ListadoVideojuegosComponent,
      FooterComponent,
      CabeceraComponent,
      DetalleVidejuegoComponent,
      DetalleSobreMiComponent,
      DatosContactoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
