import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CityModel } from 'src/app/models/cityModel';
import { ProductModel } from 'src/app/models/productModel';
import { StateModel } from 'src/app/models/stateModel';
import { SubcategoryModel } from 'src/app/models/subcategoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CityService } from 'src/app/services/cityservice/city.service';
import { ProductsService } from 'src/app/services/productsservice/products.service';
import { StateService } from 'src/app/services/stateservice/state.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categorias:CategoryModel[]=[];
  subcategorias:SubcategoryModel[]=[];
  regiones:StateModel[]=[];
  comunas:CityModel[]=[];
  saleStates:String[]=['En Venta',
  'Vendido',];
  productConditions:String[]=['Nuevo',
    'Usado - Como Nuevo',
    'Usado - Buen Estado',
    'Usado - Aceptable',];
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private activerouter:ActivatedRoute,private router:Router,private categoryserv:CategoriesService, private stateserv:StateService, private dialog:MatDialog,private citiesserv:CityService,private dialogRef: MatDialogRef<ProductEditComponent>,private productservices:ProductsService) {
  }

  product:ProductModel=this.data.product;

  datosProducto: ProductModel=this.product;
  editarProducto=new FormGroup({
    title:new FormControl(this.datosProducto.title),
    subcategoryId:new FormControl(this.datosProducto.subcategoryId.toString()),
    categoryId:new FormControl(this.datosProducto.categoryId.toString()),
    userId:new FormControl(this.datosProducto.userId),
    cityId:new FormControl(this.datosProducto.cityId.toString()),
    stateId:new FormControl(this.datosProducto.stateId.toString()),
    description:new FormControl(this.datosProducto.description),
    condition:new FormControl(this.datosProducto.condition),
    price:new FormControl(this.datosProducto.price),
    referencialPrice:new FormControl(this.datosProducto.referencialPrice),
    saleState:new FormControl(this.datosProducto.saleState),
    height:new FormControl(this.datosProducto.height),
    width:new FormControl(this.datosProducto.width),
    length:new FormControl(this.datosProducto.length),
    weight:new FormControl(this.datosProducto.weight),
  })

  getSubcat():void{
    var nume=parseInt(this.editarProducto.value.categoryId!);
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
      this.editarProducto.value.subcategoryId=this.subcategorias[0].id?.toString()
    })
  }

  getCities():void{
    var nume=parseInt(this.editarProducto.value.stateId!);
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
      this.editarProducto.value.cityId=this.comunas[0].id?.toString()
    })
  }

  getSubcatIni():void{
    var nume=this.datosProducto.categoryId;
    this.categoryserv.getSubcategoriesByCategory(nume).subscribe(data=>{
      this.subcategorias=data;
    })
  }
  getCitiesIni():void{
    var nume=this.datosProducto.stateId;
    this.citiesserv.getCitiesByState(nume).subscribe(data=>{
      this.comunas=data;
    })
  }

  ngOnInit():void{
    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })

    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
    this.getSubcatIni()
    this.getCitiesIni()
  }

  postForm(){
    this.productservices.putProduct({
      'id':this.datosProducto.id,
      'title':this.editarProducto.value.title!,
      'subcategoryId':parseInt(this.editarProducto.value.subcategoryId!),
      'categoryId':parseInt(this.editarProducto.value.categoryId!),
      'cityId':parseInt(this.editarProducto.value.cityId!),
      'stateId':parseInt(this.editarProducto.value.stateId!),
      'description':this.editarProducto.value.description!,
      'condition':this.editarProducto.value.condition!,
      'saleState':this.editarProducto.value.saleState!,
      'referencialPrice':this.editarProducto.value.referencialPrice!,
      'price':this.editarProducto.value.price!,
      'userId':this.product.userId,
      'height':this.editarProducto.value.height!,
      'length':this.editarProducto.value.length!,
      'width':this.editarProducto.value.width!,
      'weight':this.editarProducto.value.weight!,
    }).subscribe(data=>{console.log(data),
      window.location.reload()})
    this.close();
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
