import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [

  { path : '', redirectTo: '/product', pathMatch: 'full'},
  { path : 'product', component: ProductComponent},
  { path : 'category', component: CategoryComponent},
{ path : 'product/:id', component: ProductDetailComponent},
{ path : '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
