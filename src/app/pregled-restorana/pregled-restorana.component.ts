import { Component, OnInit } from '@angular/core';
import { RestoraniService } from '../service/restorani/restorani.service';

@Component({
  selector: 'app-pregled-restorana',
  templateUrl: './pregled-restorana.component.html',
  styleUrls: ['./pregled-restorana.component.css']
})
export class PregledRestoranaComponent implements OnInit {
  message = 0;
  restorani:any = [];

  constructor(private ser: RestoraniService) { }

  ngOnInit() {
    this.getSveRestorane();
    console.log(this.restorani);
  }


  getSveRestorane(){
    this.ser.getRestorani().subscribe(data=>{
      if (data['message'] == 0) {
        this.message = 1;
      } else {
        this.restorani = data;
      }
    });
  }

  izbrisiRestoran(param) {
    this.ser.deleteRestoran(param).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }
  
}
