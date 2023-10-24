import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CategoryModel } from '../../models/categoryModel'
import { SubcategoryModel } from '../../models/subcategoryModel'
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_URI = 'https://subelotodo-api-grw4z.ondigitalocean.app/api'

  constructor(private http: HttpClient) { }

  getCategories(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/categories/';
    return this.http.get<CategoryModel[]>(direction,{headers});
  }

  getSubcategoriesByCategory(catid:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/subcategories/byCategory/'+catid;
    return this.http.get<SubcategoryModel[]>(direction,{headers});
  }

  saveSubcategory(form:SubcategoryModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/subcategories/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

  saveCategory(form:CategoryModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/categories/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
  
}
