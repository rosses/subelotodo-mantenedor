import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { ProductEditComponent } from '../../products/product-edit/product-edit.component';
import { SubcategoriesAddComponent } from '../subcategories-add/subcategories-add.component';
import { CategoriesAddComponent } from '../categories-add/categories-add.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  admin=localStorage.getItem("userType");

  checkLocalStorage(){
    if (!localStorage.getItem("token")) {
      this.router.navigate(['login'])
    }
  }

  categorias:CategoryModel[]=[];
  
  constructor(private router:Router,private categoryserv:CategoriesService, private dialog:MatDialog) {
  }

  
  openDialogNewSub(category:CategoryModel) {
    const dialogRef = this.dialog.open(SubcategoriesAddComponent,{
      data: {
        categoria: category,
      }
    });
  }
  openDialogNewCat() {
    const dialogRef = this.dialog.open(CategoriesAddComponent);
  }

  ngOnInit():void{
    if (!localStorage.getItem("token")) {
      this.router.navigate(['login'])
    }
    
    if (localStorage.getItem("userType")=='3') {
      localStorage.clear();
      this.router.navigate(['login'])
    }
    
    if(this.admin=='2'){
      this.router.navigate(['productos'])
      console.log(this.admin)
    }

    this.categoryserv.getCategories().subscribe(data=>{
      this.categorias=data;
    })
  }
}
