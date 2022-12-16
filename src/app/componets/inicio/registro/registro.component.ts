import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { UsuariosService } from '../../../services/usuarios.service';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registro: FormGroup;
  loading = false;
  
  constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router, private toastr: ToastrService) {
    this.registro = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {   
  }

  registrarUsuario(): any {
    console.log(this.registro);

    const usuario: Usuario ={
      nombreUsuario: this.registro.value.usuario,
      password: this.registro.value.password
    };
    this.loading = true;
    this.usuariosService.saveUser(usuario).subscribe(data =>{
      console.log(data);
      this.toastr.success('El Usuario ' + usuario.nombreUsuario + ' Se Registro Exitosamente!!', 'Usuario Registrado!');
      this.router.navigate(['/inicio/login']);
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error);
      this.toastr.error(error.error.message, 'Error!!');
      this.registro.reset();
    });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
