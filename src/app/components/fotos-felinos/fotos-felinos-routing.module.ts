import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosFelinosComponent } from './fotos-felinos.component';

const routes: Routes = [
  { path: '', component: FotosFelinosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotosFelinosRoutingModule { }
