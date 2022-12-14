import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.component.html',
  styleUrls: ['./cambiarpassword.component.css']
})
export class CambiarpasswordComponent implements OnInit {
  cambiarPassword!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      nuevaPassword:['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:['']
    }, { validators: this.checkPassword })
  }

  ngOnInit(): void {

  }

  checkPassword(group: FormGroup): any {
    //const pass = group.controls.nuevaPassword.value;
    //const confirmPass = group.controls.confirmPassword.value;
    //return pass === confirmPass ? null : { notSame: true };
  }

  guardarPassword(): void{
    console.log(this.cambiarPassword)
  }

}
