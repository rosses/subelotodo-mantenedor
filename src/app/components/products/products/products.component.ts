import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/productsservice/products.service'
import { CategoriesService } from '../../../services/categoryservice/categories.service'
import { Router } from '@angular/router'
import { ProductModel } from '../../../models/productModel'
import { CategoryModel } from '../../../models/categoryModel'
import { SubcategoryModel } from '../../../models/subcategoryModel'
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from 'src/app/services/stateservice/state.service';
import { StateModel } from 'src/app/models/stateModel';
import { CityModel } from 'src/app/models/cityModel';
import { CityService } from 'src/app/services/cityservice/city.service';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  admin=localStorage.getItem("userType")

  byCate:boolean=true;
  
  checkLocalStorage(){
    if (localStorage.getItem("token")==null) {
      this.router.navigate(['login'])
    }
  }

  byUbi:boolean=false;

  productos:ProductModel[]=[];
  categorias:CategoryModel[]=[];
  subcategorias:SubcategoryModel[]=[];
  regiones:StateModel[]=[];
  comunas:CityModel[]=[];
  selectedValue:string='- CATEGORÍA -';
  selectedSub:string='- SUBCATEGORÍA -';
  selectedreg:string='- REGIÓN -';
  selectedcom:string='- COMUNA -';
  

  constructor(private product:ProductsService, private router:Router,private categoryserv:CategoriesService, private stateserv:StateService, private dialog:MatDialog,private citiesserv:CityService){}

  openDialog(product:ProductModel) {
    const dialogRef = this.dialog.open(ProductEditComponent,{
      data: {
        product: product,
      }
    });
  }

  openDialogNew() {
    const dialogRef = this.dialog.open(ProductAddComponent);
  }
  openDialogImage(id:number, title:string) {
    const dialogRef = this.dialog.open(ImagesComponent,{
      data: {
        id: id,
        title:title,
      }
    });
  }

  change():void{
    this.byCate=true;
    this.byUbi=false;
    this.ngOnInit();
  }

  change2():void{
    this.byCate=false;
    this.byUbi=true;
    this.ngOnInit();
  }

  subca():void{
    var nume=parseInt(this.selectedValue);
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
    })
    this.product.getProductsByCategory(nume).subscribe(data=>{
      this.productos=data;
      console.log(this.productos)
    })
  }

  subpro():void{
    var nume=parseInt(this.selectedSub);
    this.product.getProductsBySubategory(nume).subscribe(data=>{
      this.productos=data;
      console.log(this.productos)
    })
  }

  getRegi():void{
    var nume=parseInt(this.selectedreg);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
      console.log(this.comunas)
    })
    this.product.getProductsByState(nume).subscribe(data=>{
      this.productos=data;
    })
  }

  getComu():void{
    var nume=parseInt(this.selectedcom);
    this.product.getProductsByCity(nume).subscribe(data=>{
      this.productos=data;
    })
  }

  ngOnInit():void{
    if (!localStorage.getItem("token")) {
      this.router.navigate(['login'])
    }
    
    if (localStorage.getItem("userType")=='3') {
      localStorage.clear();
      this.router.navigate(['login'])
    }
    
    this.subcategorias=[];
    this.comunas=[];
    this.selectedValue='- CATEGORÍA -';
    this.selectedSub='- SUBCATEGORÍA -';
    this.selectedreg='- REGIÓN -';
    this.selectedcom='- COMUNA -';
    if (this.admin=='0') {
      this.product.getProducts().subscribe(data=>{
        this.productos=data;
      })
    } else {
      const userId=parseInt(localStorage.getItem("userId")!)
      this.product.getProductsByUser(userId).subscribe(data=>{
        this.productos=data;
      })
    }
    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })
    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
  }

  eliminar(form:ProductModel){
    this.product.deleteProduct(form).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/']);
    })
  }
}
