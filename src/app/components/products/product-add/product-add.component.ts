import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CityModel } from 'src/app/models/cityModel';
import { ProductModel } from 'src/app/models/productModel';
import { StateModel } from 'src/app/models/stateModel';
import { SubcategoryModel } from 'src/app/models/subcategoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CityService } from 'src/app/services/cityservice/city.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { StateService } from 'src/app/services/stateservice/state.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  regiones:StateModel[]=[];
  comunas:CityModel[]=[];
  categorias:CategoryModel[]=[];
  subcategorias:SubcategoryModel[]=[];
  saleStates:String[]=['En Venta',
  'Vendido',];
  productConditions:String[]=['Nuevo',
    'Usado - Como Nuevo',
    'Usado - Buen Estado',
    'Usado - Aceptable',];
  selectedValue:string='- CATEGORÍA -';
  selectedSub:string='- SUBCATEGORÍA -';
  selectedreg:string='- REGIÓN -';
  selectedcom:string='- COMUNA -';
  selectedcon:string='- Condición del producto -';
  selectedest:string='- Estado de la venta -';
  

  constructor(private router:Router,private categoryserv:CategoriesService, private stateserv:StateService,private prodservice:ProductsService, private dialog:MatDialog,private citiesserv:CityService,private dialogRef: MatDialogRef<ProductAddComponent>) {
  }
  
  newprod=new FormGroup({
    title:new FormControl(''),
    subcategoryId:new FormControl(),
    subcategory:new FormControl({}),
    categoryId:new FormControl(),
    category:new FormControl({}),
    userId:new FormControl(),
    dimensions:new FormControl({}),
    cityId:new FormControl(),
    city:new FormControl({}),
    stateId:new FormControl(),
    state:new FormControl({}),
    description:new FormControl(''),
    condition:new FormControl(''),
    price:new FormControl(),
    referencialPrice:new FormControl(),
    saleState:new FormControl(''),
    altura:new FormControl(),
    ancho:new FormControl(),
    largo:new FormControl(),
    peso:new FormControl(),
  })

  saveProduct(){
    
    this.prodservice.postProduct(
        {
          'title':this.newprod.value.title!,
          'subcategoryId':parseInt(this.newprod.value.subcategoryId!),
          'categoryId':parseInt(this.newprod.value.categoryId!),
          'cityId':parseInt(this.newprod.value.cityId!),
          'stateId':parseInt(this.newprod.value.stateId!),
          'description':this.newprod.value.description!,
          'condition':this.newprod.value.condition!,
          'saleState':this.newprod.value.saleState!,
          'referencialPrice':this.newprod.value.referencialPrice!,
          'price':this.newprod.value.price!,
          'userId':parseInt(localStorage.getItem("userId")!),
          'height':this.newprod.value.altura!,
          'length':this.newprod.value.largo!,
          'width':this.newprod.value.ancho!,
          'weight':this.newprod.value.peso!,
        }
      ).subscribe(data=>{console.log(data),
        window.location.reload()});
      console.log(this.prodservice)
    this.close()
  }

  getSubcat():void{
    var nume=parseInt(this.selectedValue);
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
    })
  }

  getCities():void{
    var nume=parseInt(this.selectedreg);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
      console.log(this.comunas)
    })
  }

  ngOnInit():void{
    
    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })
    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
  }


  close(): void {
    this.dialogRef.close(true);
  }
}
