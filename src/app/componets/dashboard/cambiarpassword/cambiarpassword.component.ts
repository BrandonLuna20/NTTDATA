import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.component.html',
  styleUrls: ['./cambiarpassword.component.css']
})
export class CambiarpasswordComponent implements OnInit {
  cambiarPassword!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router, private toastr: ToastrService) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword:['', [Validators.required, Validators.minLength(4)]]
  });


}
ngOnInit(): void {

}

  guardarPassword(): void{
    console.log(this.cambiarPassword);

    const changePassword: any = {
      contraseñaAnterior: this.cambiarPassword.value.contraseñaAnterior,
      nuevaContraseña: this.cambiarPassword.value.nuevaContraseña
    };

    console.log(changePassword);
  }

}
