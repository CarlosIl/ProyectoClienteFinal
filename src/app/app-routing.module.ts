import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FranceComponent } from './paises/france/france.component';
import { PaisesComponent } from './paises/paises.component';
import { SpainComponent } from './paises/spain/spain.component';

const routes: Routes = [
  {path:'', component:BuscarComponent},
  {path:'catalogo', component:CatalogoComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'paises', component:PaisesComponent,children: [
    {path: 'spain', component:SpainComponent},
    {path: 'france', component:FranceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
