import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
  <ul class="item">
  <li  (click)="onSelect(product)" *ngFor="let product of products">
    <span class="badge">{{product.id}}</span> {{product.name}}
  </li>
</ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  public products = [
    {"id": 1, "name": "Laptop"},
    {"id": 2, "name": "Desktop"},
    {"id": 3, "name": "Mobile"},
    
  ]
  constructor(private rounter: Router) { }

  ngOnInit() {
    
  }
  onSelect(products){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/product', products.id]);
  }

}
