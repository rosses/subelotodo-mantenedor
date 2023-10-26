import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor( private router:Router){}

  admin=localStorage.getItem("userType");
  userName=localStorage.getItem("userName");

  logout():void{
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
