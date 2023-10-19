import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CategoriesAddComponent } from '../../categories/categories-add/categories-add.component';
import { SubcategoriesAddComponent } from '../../categories/subcategories-add/subcategories-add.component';
import { StateService } from 'src/app/services/stateservice/state.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-states-add',
  templateUrl: './states-add.component.html',
  styleUrls: ['./states-add.component.css']
})
export class StatesAddComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private dialogRef: MatDialogRef<StatesAddComponent>,private stateserv:StateService) {}

 

  newState=new FormGroup({
    name:new FormControl(''),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  

  postState():void{
    this.stateserv.saveState({'name':this.newState.value.name!}).subscribe(data=>{console.log(data)});
    this.close()
    window.location.reload();
  }
}