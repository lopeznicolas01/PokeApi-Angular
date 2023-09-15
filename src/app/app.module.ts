import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPokemon } from './formulario-pokemon.componen/formulario-pokemon.componen.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPokemon.ComponenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
