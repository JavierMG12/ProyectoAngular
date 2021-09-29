import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/Interface/comentario';
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {

  listcomentario: Comentario[] = [
    {titulo:'Practica',creador:'Javier', texto:'Complemento',fechacreacion: new Date()},
    {titulo:'Practica',creador:'Javier', texto:'Complemento',fechacreacion: new Date()},
    {titulo:'Chihuahuas 🐶',creador:'Mariam', texto:'Complemento',fechacreacion: new Date()}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
