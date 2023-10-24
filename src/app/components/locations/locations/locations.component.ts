import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoriesService } from 'src/app/services/categoryservice/categories.service';
import { CategoriesAddComponent } from '../../categories/categories-add/categories-add.component';
import { SubcategoriesAddComponent } from '../../categories/subcategories-add/subcategories-add.component';
import { StateModel } from 'src/app/models/stateModel';
import { StateService } from 'src/app/services/stateservice/state.service';
import { CitiesAddComponent } from '../cities-add/cities-add.component';
import { StatesAddComponent } from '../states-add/states-add.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  regiones:StateModel[]=[];
  
  constructor(private router:Router,private stateserv:StateService, private dialog:MatDialog) {
  }

  admin=localStorage.getItem("userType");

  checkLocalStorage(){
    if (!localStorage.getItem("token")) {
      this.router.navigate(['login'])
    }
  }
  
  openDialogNewCity(state:StateModel) {
    const dialogRef = this.dialog.open(CitiesAddComponent,{
      data: {
        region: state,
      }
    });
  }
  openDialogNewState() {
    const dialogRef = this.dialog.open(StatesAddComponent);
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
    }
    this.stateserv.getStates().subscribe(data=>{
      this.regiones=data;
    })
  }
}
