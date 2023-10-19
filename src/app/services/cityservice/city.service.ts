import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/cityModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  API_URI = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }
  
  getCitiesByState(stateId:number){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/cities/byState/'+stateId;
    return this.http.get<CityModel[]>(direction,{headers});
  }

  saveCity(form:CityModel):Observable<ResponseModel>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    let direction=this.API_URI+'/cities/';
    return this.http.post<ResponseModel>(direction,form,{headers});
  }
}
