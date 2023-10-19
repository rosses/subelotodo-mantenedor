import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StateModel } from 'src/app/models/stateModel';
import { CityService } from 'src/app/services/cityservice/city.service';

@Component({
  selector: 'app-cities-add',
  templateUrl: './cities-add.component.html',
  styleUrls: ['./cities-add.component.css']
})
export class CitiesAddComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private dialogRef: MatDialogRef<CitiesAddComponent>,private cityserv:CityService) {}

  region:StateModel=this.data.region;

  newCity=new FormGroup({
    name:new FormControl(''),
    stateId:new FormControl(this.region.id),
  })
  
  close(): void {
    this.dialogRef.close(true);
  }
  

  postCity():void{
    this.cityserv.saveCity({'name':this.newCity.value.name!,'stateId':this.newCity.value.stateId!}).subscribe(data=>{console.log(data)});
    this.close()
    window.location.reload();
  }

}
