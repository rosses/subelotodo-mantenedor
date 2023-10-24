import { Injectable } from '@angular/core';
import {LoginModel} from '../../models/loginModel'
import {ResponseModel} from '../../models/responseModel'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'https://subelotodo-api-grw4z.ondigitalocean.app/api'

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginModel):Observable<ResponseModel>{
    
    let direction=this.API_URI+'/login';
    return this.http.post<ResponseModel>(direction,form);
  }
}
