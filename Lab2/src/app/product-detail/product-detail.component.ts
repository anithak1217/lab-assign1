import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  <h3>you selected a product with id {{proId}}</h3>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {

  public proId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.proId = id;
  }

}
