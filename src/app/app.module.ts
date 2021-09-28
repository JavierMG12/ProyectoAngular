import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './Components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListComentarioComponent } from './Components/list-comentario/list-comentario.component';
import { VerComentarioComponent } from './Components/ver-comentario/ver-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListComentarioComponent,
    VerComentarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
