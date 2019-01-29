import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError = 0;
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  constructor(private ser: LoginService, private rou: Router) { }

  ngOnInit() {
  }


  submitData() {
    if (this.form.valid) {
      this.ser.getLogin(this.username.value, this.password.value).subscribe(data => {
        localStorage.setItem("rolaid", data[0]["ROLE_ID"]);
        localStorage.setItem("userId", data[0]["USERID"]);
        localStorage.setItem("status", localStorage.getItem("rolaid"));
        if (localStorage.getItem("rolaid") == "1") {
          this.rou.navigate(["/pregled-porudzbina"]);
        } else if(localStorage.getItem("rolaid") == "2") {
          this.rou.navigate(["/pregled-svih-porudzbina"]);
        }
        window.location.reload();
      });
    }else{
      this.loginError = 1;
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
