import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventManager } from '@angular/platform-browser';
import { ProductImageModel } from 'src/app/models/productImage';
import { ProductsService } from 'src/app/services/productsservice/products.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialog:MatDialog,private dialogRef: MatDialogRef<ImagesComponent>,private http: HttpClient,private prodservice:ProductsService) {}
  
  product:string=this.data.id;
  title:string=this.data.title;
  ruta:string='http://localhost:8000/'

  multipleImages = [];
  imagenes:ProductImageModel[]=[]
  
  selectMultipleImage(event:any){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
    
    this.imagenes.forEach(value=>{console.log(this.ruta+value.filePath)})
  }

  generarNumeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img, this.product+this.title.replaceAll(' ','')+Date.now()+this.generarNumeroAleatorio(1, 1000));
    }
      this.prodservice.postProductImages(formData).subscribe(data=>{console.log(data)});
      
      formData.forEach( (value) => {
        if (value instanceof File) {
          console.log(value.name+'.'+value.type.split('/')[1]);
          this.prodservice.postProductImage({
            'productId':parseInt(this.product),
            'filePath':value.name+value.type.replace('/','.'),
          }).subscribe(data=>{console.log(data),
            window.location.reload()});
        }
    });

    this.close()

  }

  close(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
    this.prodservice.getImagesByProduct(parseInt(this.product)).subscribe(data=>{
      this.imagenes=data
    })
    this.imagenes.forEach(value=>{console.log(this.ruta+value.filePath)})
  }

}

//http://localhost: