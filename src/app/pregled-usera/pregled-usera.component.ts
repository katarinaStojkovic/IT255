import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users/users.service';

@Component({
  selector: 'app-pregled-usera',
  templateUrl: './pregled-usera.component.html',
  styleUrls: ['./pregled-usera.component.css']
})
export class PregledUseraComponent implements OnInit {
  message = 0;
  useri:any = [];
  constructor(private ser: UsersService) { }

  ngOnInit() {
    this.getSveUseri();
  }


  getSveUseri(){
    this.ser.getSveUseri().subscribe(data=>{
      if (data['message'] == 0) {
        this.message = 1;
      } else {
        this.useri = data;
      }
    });
  }
}
