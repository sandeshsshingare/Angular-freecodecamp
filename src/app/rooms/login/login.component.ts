import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  Login() {
    if (this.loginService.Login(this.email, this.password)) {
      this.router.navigateByUrl('/rooms');
    } else {
      alert('Sorry!!! You are not allowed');
    }
  }
}
