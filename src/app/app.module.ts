import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/productsservice/products.service';
import { CategoriesService } from './services/categoryservice/categories.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { SubcategoriesAddComponent } from './components/categories/subcategories-add/subcategories-add.component';
import { LocationsComponent } from './components/locations/locations/locations.component';
import { StatesAddComponent } from './components/locations/states-add/states-add.component';
import { CitiesAddComponent } from './components/locations/cities-add/cities-add.component';
import { CategoriesAddComponent } from './components/categories/categories-add/categories-add.component';
import { ImagesComponent } from './components/products/images/images.component';
import { TagsComponent } from './components/tags/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductAddComponent,
    CategoriesComponent,
    SubcategoriesAddComponent,
    LocationsComponent,
    StatesAddComponent,
    CitiesAddComponent,
    CategoriesAddComponent,
    ImagesComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
  ],
  
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
