import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  role;
  status;


  constructor(private ser: AuthService,private rou: Router) { }


  ngOnInit() {
    this.checkStatus();
  }

  checkStatus(){
    this.role = this.ser.checkstatus();
  }

}
