import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isloggedIn:boolean = false;

  constructor() { }

  login(username:string, password:string){
    if(username == 'team1' && password == 'team1'){
      this.isloggedIn = true;
    }else{
      this.isloggedIn = false;
    }

    return this.isloggedIn;
  }

  canActivate(){
    return this.isloggedIn;
  }

  isLoggedIn(){
    return this.isloggedIn;
  }

  logout(){
    this.isloggedIn = false;
  }
}
