import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalDetallePokemonComponent } from './modal-detalle-pokemon/modal-detalle-pokemon.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalModificarEliminarComponent } from './modal-modificar-eliminar/modal-modificar-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalDetallePokemonComponent,
    NavbarComponent,
    FooterComponent,
    ModalModificarEliminarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModalModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
