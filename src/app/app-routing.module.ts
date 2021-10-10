import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComentarioComponent } from './Components/list-comentario/list-comentario.component';
import { AgregarEditarComentarioComponent } from './Components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './Components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: '',component: ListComentarioComponent},
  {path: 'agregar', component: AgregarEditarComentarioComponent},
  {path: 'editar/:id', component: AgregarEditarComentarioComponent},
  {path: 'ver/:id',  component: VerComentarioComponent},
  {path: '**',redirectTo: '',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]],
    exports: [RouterModule]
})
export class AppRoutingModule { }
