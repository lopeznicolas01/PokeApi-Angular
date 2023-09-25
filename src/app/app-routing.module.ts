import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalDetallePokemonComponent } from './modal-detalle-pokemon/modal-detalle-pokemon.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path : "detalle", component: ModalDetallePokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
