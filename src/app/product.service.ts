import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
// import {  } from 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    // return this._http.get(this._albumUrl).pipe(map(url => url.json()));
    return this._http.get(this._albumUrl).pipe(map(url => url.json()));
  }

}
