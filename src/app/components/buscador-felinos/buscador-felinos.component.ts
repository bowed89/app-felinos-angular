import { Component, OnInit } from '@angular/core';
import { FelinosService } from '../../services/felinos.service';

@Component({
  selector: 'app-buscador-felinos',
  templateUrl: './buscador-felinos.component.html',
  styles: [
  ]
})
export class BuscadorFelinosComponent implements OnInit {

  felinos: object = null;
  felinoUnitario: any;
  felinoSeleccion: string;
  imageId: string;
  imageUrl: any;

  constructor(
    private _felinosService: FelinosService
  ) { }

  ngOnInit(): void {
    this._felinosService.getData().subscribe((resp) => {
      this.felinos = resp;
      console.log(this.felinos)
    });
    
  }

  onFelinoSelecccion(name: string){
    this._felinosService.getDataName(name).subscribe((resp) => {
      this.felinoUnitario = resp
      console.log(this.felinoUnitario)

      for(let i in resp){
        this.imageId = resp[i].reference_image_id;

        this._felinosService.getImage(this.imageId).subscribe((resp2) => {
          this.imageUrl = resp2['url'];
          console.log(this.imageUrl);
        });
      }
      console.log(this.imageId)
    });
  }

}
