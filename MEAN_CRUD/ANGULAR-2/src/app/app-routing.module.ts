import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AdddProductComponent } from './products/addd-product/addd-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:ProductListComponent},
    {path:'add',component:AdddProductComponent},
    {path:'update/:id',component:EditProductComponent},
    {path:':id',component:ProductDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
