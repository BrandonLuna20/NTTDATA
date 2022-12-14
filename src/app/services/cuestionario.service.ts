import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  //myAppUrl: string;
  //myApuUrl: string;

  constructor() {
    //this.myAppUrl = environment.endpoint;
    //this.myApiUrl = '/api/Cuestionario';
  }

  //guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    //return this.http.post(this.myAppUrl + this.MyApiUrl, cuestionario);
  }
//}
