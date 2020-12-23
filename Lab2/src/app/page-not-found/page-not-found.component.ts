import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
   
    <h3>you selected product with id {{id}}</h3>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  public proId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.proId = id;
  }

}
