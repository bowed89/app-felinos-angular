import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FelinosFotosService {

  private api: string = 'https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=0&category_ids=1&sub_id=demo-b7e1c3';

  constructor(
    private http: HttpClient
  ) { }

  getImages(){
    return this.http.get(this.api);
  }
}
