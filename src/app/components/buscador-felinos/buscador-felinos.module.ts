import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { BuscadorFelinosRoutingModule } from './buscador-felinos-routing.module';
import { BuscadorFelinosComponent } from './buscador-felinos.component';


@NgModule({
  declarations: [BuscadorFelinosComponent],
  imports: [
    CommonModule,
    BuscadorFelinosRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class BuscadorFelinosModule { }
