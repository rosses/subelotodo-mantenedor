import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/productModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { StateModel } from 'src/app/models/stateModel';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  API_URI = 'https://subelotodo-api-grw4z.ondigitalocean.app/api'

  constructor(private http: HttpClient) { }

  getStates(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/states/';
    console.log(direction)
    return this.http.get<StateModel[]>(direction,{headers});
  }

  getState(id: number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/states/'+id;
    return this.http.get<StateModel>(direction,{headers});
  }

  saveState(form:StateModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/states/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }

}
