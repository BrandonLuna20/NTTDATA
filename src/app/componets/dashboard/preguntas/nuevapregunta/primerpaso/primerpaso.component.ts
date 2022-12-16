import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from '../../../../../services/cuestionario.service';

@Component({
  selector: 'app-primerpaso',
  templateUrl: './primerpaso.component.html',
  styleUrls: ['./primerpaso.component.css']
})
export class PrimerpasoComponent {
  datosCuestionario!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private CuestionarioService: CuestionarioService) {
      this.datosCuestionario = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  primerpaso(): void {
    this.CuestionarioService.tituloPregunta = this.datosCuestionario.value.titulo;
    this.CuestionarioService.descripcionPregunta = this.datosCuestionario.value.descripcion;

    this.router.navigate(['/dashboard/nuevoCuestionario/segundopaso']);
  }
  
}
