import { Component, OnInit } from '@angular/core';
import { NuevapreguntaComponent } from '../../nuevapregunta.component';
import { FormGroup, FormBuilder, Validators,FormArray } from '@angular/forms';
import { Pregunta } from '../../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preguntasnuevas',
  templateUrl: './preguntasnuevas.component.html',
  styleUrls: ['./preguntasnuevas.component.css']
})
export class PreguntasnuevasComponent implements OnInit {
  nuevaPregunta: FormGroup;
  pregunta!: Pregunta;
  rtaCorrecto = 0;
  
  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.nuevaPregunta = this.fb.group({
      titulo: ['', Validators.required],
      respuesas: this.fb.array([])
    });
  }

  ngOnInit(): void {
      
  }

  get getRespuestas(): FormArray {
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  agregarRespuesta(): void {
    this.getRespuestas.push(this.fb.group({
      descripcion: ['', Validators.required],
      esCorrecta: 0
    }));
  }

}
