import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DatosPersonaComponent } from './components/datos-persona/datos-persona.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registros', component: RegistroComponent },
  { path: 'addUsuario', component: AddUserComponent },
  { path: 'datosPersona', component: DatosPersonaComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
