import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosFelinosRoutingModule } from './fotos-felinos-routing.module';
import { FotosFelinosComponent } from './fotos-felinos.component';


@NgModule({
  declarations: [FotosFelinosComponent],
  imports: [
    CommonModule,
    FotosFelinosRoutingModule
  ]
})
export class FotosFelinosModule { }
