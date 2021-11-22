import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skillUp-UI';
  isLoggedIn:boolean = false;

  constructor(private router: Router, private authService:AuthService) { }

  gotoLogin() {
    this.router.navigate(['/login']);
  }

  userLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
