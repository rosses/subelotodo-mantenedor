import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/models/categoryModel';
import { SubcategoryModel } from 'src/app/models/subcategoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';

@Component({
  selector: 'app-subcategories-add',
  templateUrl: './subcategories-add.component.html',
  styleUrls: ['./subcategories-add.component.css']
})
export class SubcategoriesAddComponent {


  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private dialogRef: MatDialogRef<SubcategoriesAddComponent>,private categoryserv:CategoriesService) {}

  categoria:CategoryModel=this.data.categoria;

  newsubcat=new FormGroup({
    name:new FormControl(''),
    categoryId:new FormControl(this.categoria.id),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  

  postSubcat():void{
    this.categoryserv.saveSubcategory({'name':this.newsubcat.value.name!,'categoryId':this.newsubcat.value.categoryId!}).subscribe(data=>{console.log(data),window.location.reload()});
    this.close()
    
    
  }

}
