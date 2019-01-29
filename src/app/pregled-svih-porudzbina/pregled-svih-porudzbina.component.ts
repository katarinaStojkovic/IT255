import { Component, OnInit } from '@angular/core';
import { PorudzbineService } from '../service/porudzbine/porudzbine.service';

@Component({
  selector: 'app-pregled-svih-porudzbina',
  templateUrl: './pregled-svih-porudzbina.component.html',
  styleUrls: ['./pregled-svih-porudzbina.component.css']
})
export class PregledSvihPorudzbinaComponent implements OnInit {
  message = 0;
  porudzbine:any = [];

  constructor(private ser: PorudzbineService) { }

  ngOnInit() {
    this.getSvePorudzbine();
    console.log(this.porudzbine);
  }


  getSvePorudzbine(){
    this.ser.getSvePorudzbine().subscribe(data=>{
      if (data['message'] == 0) {
        this.message = 1;
      } else {
        this.porudzbine = data;
      }
    });
  }

  izbrisiPorudzbinu(param) {
    this.ser.deletePorudzbine(param).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }


}
