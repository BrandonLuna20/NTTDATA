import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../../services/cuestionario.service';
import { Pregunta } from '../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segundopaso',
  templateUrl: './segundopaso.component.html',
  styleUrls: ['./segundopaso.component.css']
})
export class SegundopasoComponent implements OnInit {
  listPreguntas: Pregunta[] = [];

  constructor(private cuestionarioService: CuestionarioService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
      
  }

}
