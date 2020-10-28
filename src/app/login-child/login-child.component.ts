import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {

  
  @Input("email") email: string;
  @Input("password") password : string;
  @Output("errorMessage") errorMessage = 'Invalid Credentials';
  @Output("successMessage") successMessage: string;
  @Output("invalidLogin") invalidLogin = false;
  @Output("loginSuccess") loginSuccess = false;
  constructor() { }

  ngOnInit(): void {
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
