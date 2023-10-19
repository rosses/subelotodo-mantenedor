import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { LocationsComponent } from './components/locations/locations/locations.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'productos',
    component:ProductsComponent,
  },
  {
    path:'categorias',
    component:CategoriesComponent,
  },
  {
    path:'ubicaciones',
    component:LocationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
