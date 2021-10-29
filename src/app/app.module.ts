import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LibroComponent } from './libro/libro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, HeaderComponent, LibroComponent, NgbdModalComponent, LoginComponent, ListadoLibrosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
