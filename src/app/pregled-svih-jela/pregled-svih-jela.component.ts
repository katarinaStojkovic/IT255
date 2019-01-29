import { Component, OnInit } from '@angular/core';
import { JelaService } from '../service/jela/jela.service';

@Component({
  selector: 'app-pregled-svih-jela',
  templateUrl: './pregled-svih-jela.component.html',
  styleUrls: ['./pregled-svih-jela.component.css']
})
export class PregledSvihJelaComponent implements OnInit {
  jela:any = [];
  message = 0;
  constructor(private ser: JelaService) { }

  ngOnInit() {
    this.getSveJela();
    console.log(this.jela);
  }


  getSveJela(){
    this.ser.getSveJela().subscribe(data=>{
      if (data['message'] == 0) {
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
