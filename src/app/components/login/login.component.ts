import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../../services/api/api.service'
import { LoginModel } from '../../models/loginModel'
import { Router } from '@angular/router'
import { ResponseModel } from '../../models/responseModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router){}

  errorStatus:boolean=false;
  errorMsj:any;

  ngOnInit():void{
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if (localStorage.getItem("token")) {
      this.router.navigate(['productos'])
    }
    if (localStorage.getItem("userType")=='3') {
      localStorage.clear();
      this.router.navigate(['login'])
    }
  }

  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data=>{
      console.log(data)
      let dataResponse:ResponseModel = data;
      if (dataResponse.status=='ok') {
        localStorage.setItem("userId",dataResponse.id)
        localStorage.setItem("token",dataResponse.token);
        localStorage.setItem("userType",dataResponse.type);
        this.router.navigate(['productos']);
      } else {
        this.errorStatus=true;
        this.errorMsj=dataResponse.msg;
      }
    });
  }
}
