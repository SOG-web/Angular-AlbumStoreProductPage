import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map, add, operator } from "rxjs";

@Injectable()
export class ProductService {
  private _albumUrl = ../assets/album.json;

  constructor(private _http: Http) { }

getAlbum(id: number) {
  this._http.get(this._albumUrl).map((response) => {
    return response.json()
  })
}

}
