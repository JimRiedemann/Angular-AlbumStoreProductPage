import { Component, OnInit } from '@angular/core';
// import { subscribeOn } from 'rxjs/operator/subscribeOn';
// import { subscribe } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productService: ProductService) {
    this._productService = _productService;
   }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
