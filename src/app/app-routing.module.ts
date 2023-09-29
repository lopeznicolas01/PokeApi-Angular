import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalDetallePokemonComponent } from './modal-detalle-pokemon/modal-detalle-pokemon.component';
import { ModalModificarEliminarComponent } from './modal-modificar-eliminar/modal-modificar-eliminar.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path : "detalle", component: ModalDetallePokemonComponent},
  {path : "modificar", component: ModalModificarEliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
