import { Component, OnInit } from '@angular/core';
import { PorudzbineService } from '../service/porudzbine/porudzbine.service';
import { PorudzbinePipe } from '../Pipes/porudzbine.pipe';

@Component({
  selector: 'app-pregled-porudzbina',
  templateUrl: './pregled-porudzbina.component.html',
  styleUrls: ['./pregled-porudzbina.component.css']
})
export class PregledPorudzbinaComponent implements OnInit {
  message = 0;
  porudzbine: any = [];
  filterString = "";

  constructor(private ser: PorudzbineService) {}

  ngOnInit() {
    this.getSvePorudzbine();
  }


  getSvePorudzbine() {
    this.ser.getPorudzbine().subscribe(data => {
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
