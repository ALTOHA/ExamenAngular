import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { LoginComponent } from './login/login.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component:ListadoLibrosComponent},
  {path: 'personas', component:PersonasComponent},
  {path: 'personas/agregar', component:PersonasComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
