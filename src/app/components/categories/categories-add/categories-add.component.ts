import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { SubcategoriesAddComponent } from '../subcategories-add/subcategories-add.component';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private dialogRef: MatDialogRef<CategoriesAddComponent>,private categoryserv:CategoriesService) {}

 

  newcat=new FormGroup({
    name:new FormControl(''),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  

  postSubcat():void{
    this.categoryserv.saveCategory({'name':this.newcat.value.name!}).subscribe(data=>{console.log(data),window.location.reload()});
    this.close()
    
    
  }
}
