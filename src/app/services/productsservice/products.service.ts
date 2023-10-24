import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProductModel } from '../../models/productModel'
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { ProductImageModel } from 'src/app/models/productImage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'https://subelotodo-api-grw4z.ondigitalocean.app/api'

  constructor(private http: HttpClient) { }

  getProducts(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products';
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProduct(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/'+id;
    return this.http.get<ProductModel>(direction,{headers});
  }

  getProductsByCategory(categoryId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byCategory/'+categoryId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsBySubategory(subcategoryId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/bySubcategory/'+subcategoryId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByState(stateId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byState/'+stateId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByCity(cityId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byCity/'+cityId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  getProductsByUser(userId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/byUser/'+userId;
    return this.http.get<ProductModel[]>(direction,{headers});
  }

  putProduct(form:ProductModel){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/'+form.id;
    return this.http.put(direction,form,{headers});
  }

  deleteProduct(form:ProductModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/'+form.id;
    return this.http.delete<ResponseModel>(direction,{headers});
  }

  postProduct(form:ProductModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/products/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  postProductImages(form:FormData):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/multipleFiles';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
  
  postProductImage(form:ProductImageModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/post/';
    console.log(direction)
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  getImagesByProduct(productId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/productImages/byProductId/'+productId;
    return this.http.get<ProductImageModel[]>(direction,{headers});
  }
}
