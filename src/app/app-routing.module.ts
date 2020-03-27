import { FormularioComponent } from './components/formulario/formulario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'estudiante', component: EstudianteComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
