import { Component, OnInit } from '@angular/core';
import { FelinosFotosService } from '../../services/felinos-fotos.service';

@Component({
  selector: 'app-fotos-felinos',
  templateUrl: './fotos-felinos.component.html',
  styles: [
  ]
})
export class FotosFelinosComponent implements OnInit {

  image: any;
  randomImage: any;
  all: any;

  first: any;
  last: any;
  next: any;

  cont: number = 0;

  constructor(
    private _felinosFotosService: FelinosFotosService
  ) { }

  ngOnInit(): void {
    this._felinosFotosService.getImages().subscribe((resp) => {
      console.log(resp)
      this.image = resp[0]['url'];
      this.first = resp[0];
      this.last = resp[17];
      this.all = resp;

      console.log(this.image)
    })
  }

  primero(){
    this.next = this.first['url'];
    this.cont = 0;
  }

  anterior(){
    if(this.cont >= 1){
      this.cont = this.cont - 1;
      this.next = this.all[this.cont]['url']
      console.log(this.next)
    }
  }

  siguiente(){
    if(this.cont < 17){
      this.cont = this.cont + 1;
      this.next = this.all[this.cont]['url']
      console.log(this.next)
    }
  }

  ultimo(){
    this.next = this.last['url'];
    this.cont = 17;
  }

  aleatorio(){
    this._felinosFotosService.getImages().subscribe((resp) => {
      this.image = resp[0]['url'];
    });
  }

}
