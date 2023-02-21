import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModuleModule } from "./material-module/material-module.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './formulario/formulario.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartaComponent } from './catalogo/carta/carta.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ModalComponent } from './formulario/modal/modal.component';
import { WebComponent } from './buscar/web/web.component';
import { PaisesComponent } from './paises/paises.component';
import { SpainComponent } from './paises/spain/spain.component';
import { FranceComponent } from './paises/france/france.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CatalogoComponent,
    SidenavComponent,
    NavbarComponent,
    CartaComponent,
    BuscarComponent,
    ModalComponent,
    WebComponent,
    PaisesComponent,
    SpainComponent,
    FranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
