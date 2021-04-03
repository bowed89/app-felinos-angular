import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorFelinosComponent } from './buscador-felinos.component';

const routes: Routes = [
  { path: '', component: BuscadorFelinosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorFelinosRoutingModule { }
