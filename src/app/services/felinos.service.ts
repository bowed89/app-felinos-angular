import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FelinosService {

  private api: string = 'https://api.thecatapi.com/v1/breeds';
  private apImg: string = 'https://api.thecatapi.com/v1/images';

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get(this.api);
  }

  getDataName(name: string){
    return this.http.get(`${this.api}/search?name=${name}`);
  }

  getImage(id: string){
    return this.http.get(`${this.apImg}/${id}`);
  }

}
