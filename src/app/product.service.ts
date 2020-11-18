import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// import { album } from './album'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  // getAlbum(id: number): Observable<album> {
  //   return this._http.get(this._albumUrl).pipe(map(response => <album>response.json()));
  // }

  getAlbum(id: number)  {
    return this._http.get(this._albumUrl).pipe(map(response => response.json()));
  }

}
