import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/Interface/comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  agregarcomentario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.agregarcomentario = this.fb.group({
      titulo: ['',Validators.required],
      creador:['',Validators.required],
      texto: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  Agregar(){
    const comentario: Comentario={
      titulo: this.agregarcomentario.get('titulo')?.value,
      creador: this.agregarcomentario.get('creador')?.value,
      texto:this.agregarcomentario.get('texto')?.value,
      fechacreacion: new Date
    }
    alert("Titulo: "+comentario.titulo+ "\n"+
    "Creador: "+comentario.creador+"\n"+
    "Texto: "+comentario.texto+"\n"+
    "Metodo Agregar actualmente sin funcionar");
   }
}
