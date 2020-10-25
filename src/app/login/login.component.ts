import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor() {}
   
  ngOnInit() {
  }

  handleLogin() {
        if (this.email!= null && this.password!=null) {
            if(this.email === "nehashettar@gmail.com" && this.password === "neha@123") {
              this.loginSuccess = true;
              this.successMessage = "Login Successful";
              this.invalidLogin = false;
            } else {
              this.invalidLogin = true;
              this.loginSuccess = false;
              this.errorMessage = "Invalid Credentials";
            }
        } else {
          this.invalidLogin = true;
          this.loginSuccess = false;
          this.errorMessage = "Enter Credentials";
        }
  }

}
