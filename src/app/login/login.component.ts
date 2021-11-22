import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
   
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(username:string, password:string){
    if(this.authService.login(username, password)){
      this.router.navigate(['home'])
    }else{
      alert("Unable to login: Invalid username or password");
    }
  }
}
