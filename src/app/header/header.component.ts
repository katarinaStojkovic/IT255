import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private ser: AuthService,private rou: Router) { }

  role;
  status;

  ngOnInit() {
    this.checkStatus();
  }

  checkStatus(){
    this.role = this.ser.checkstatus();
  }

  logout(){
    localStorage.clear();
    this.role = "1";
    this.status = "1";
    this.rou.navigate([""]);
    window.location.reload();
  }
}
