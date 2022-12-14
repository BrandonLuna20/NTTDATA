import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { RegistroComponent } from './componets/inicio/registro/registro.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { PreguntasComponent } from './componets/dashboard/preguntas/preguntas.component';
import { CambiarpasswordComponent } from './componets/dashboard/cambiarpassword/cambiarpassword.component';
import { NuevapreguntaComponent } from './componets/dashboard/preguntas/nuevapregunta/nuevapregunta.component';
import { PrimerpasoComponent } from './componets/dashboard/preguntas/nuevapregunta/primerpaso/primerpaso.component';
import { SegundopasoComponent } from './componets/dashboard/preguntas/nuevapregunta/segundopaso/segundopaso.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, children: [
    { path: '', component: BienvenidaComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
  ]},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: PreguntasComponent },
    {path: 'cambiarpassword', component: CambiarpasswordComponent },
    {path: 'nuevoCuestionario', component: NuevapreguntaComponent, children:[
      {path: 'primerpaso', component: PrimerpasoComponent },
      {path: 'segundopaso', component: SegundopasoComponent }
    ]}
  ]},
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
