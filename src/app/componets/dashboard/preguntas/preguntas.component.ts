import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  //nombreUsuario: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getNombreusuario();
  }

  getNombreusuario(): void {
    console.log(this.loginService.getTokenDecode());
    //this.nombreUsuario = this.loginService.getTokenDecode().sub;
  }

}
