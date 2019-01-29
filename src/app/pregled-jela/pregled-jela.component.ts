import { Component, OnInit } from '@angular/core';
import { JelaService } from '../service/jela/jela.service';


@Component({
  selector: 'app-pregled-jela',
  templateUrl: './pregled-jela.component.html',
  styleUrls: ['./pregled-jela.component.css']
})
export class PregledJelaComponent implements OnInit {
  message = 0;
  jela:any = [];

  constructor(private ser: JelaService) { }

  ngOnInit() {
    this.getSveJela();
  }


  getSveJela(){
    this.ser.getJela().subscribe(data=>{
      if (data == 0) {
        this.message = 1;
      } else {
        this.jela = data;
      }
    });
  }

  izbrisiJelo(param) {
    this.ser.deleteJela(param).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }
}
