import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegistroComponent } from './componets/inicio/registro/registro.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { CambiarpasswordComponent } from './componets/dashboard/cambiarpassword/cambiarpassword.component';
import { PreguntasComponent } from './componets/dashboard/preguntas/preguntas.component';
import { NavbarComponent } from './componets/dashboard/navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevapreguntaComponent } from './componets/dashboard/preguntas/nuevapregunta/nuevapregunta.component';
import { PrimerpasoComponent } from './componets/dashboard/preguntas/nuevapregunta/primerpaso/primerpaso.component';
import { SegundopasoComponent } from './componets/dashboard/preguntas/nuevapregunta/segundopaso/segundopaso.component';
import { PreguntasnuevasComponent } from './componets/dashboard/preguntas/nuevapregunta/segundopaso/preguntasnuevas/preguntasnuevas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    CambiarpasswordComponent,
    PreguntasComponent,
    NavbarComponent,
    SharedComponent,
    LoadingComponent,
    NuevapreguntaComponent,
    PrimerpasoComponent,
    SegundopasoComponent,
    PreguntasnuevasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
