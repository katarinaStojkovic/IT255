import { Component, OnInit } from '@angular/core';
import { JelaService } from '../service/jela/jela.service';
import { RestoraniService } from '../service/restorani/restorani.service';
import { FormGroup, FormControl, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-jelo',
  templateUrl: './create-jelo.component.html',
  styleUrls: ['./create-jelo.component.css']
})
export class CreateJeloComponent implements OnInit {
  error = 0;
  form = new FormGroup({
    restoran: new FormControl('', Validators.required),
    nazivjela: new FormControl('', Validators.required),
    cena: new FormControl('', Validators.required),
    opis: new FormControl('', Validators.required)
  });

  constructor(private ser: JelaService, private res: RestoraniService,private rou: Router) { }
 
  restorani:any = [];

  ngOnInit() {
    this.getSveRestorane();
    console.log(this.restorani);
  }


  submitData() {
    if(this.form.valid == true){
      if (localStorage.getItem("rolaid") == "1") {
      console.log(this.form.value);
      this.ser.createJelo(this.restoran.value,this.nazivjela.value,this.cena.value,this.opis.value).subscribe(data =>{
      console.log(data);
      this.rou.navigate(["/pregled-jela"]);
    });
  }else{
    this.rou.navigate(["/pregled-svih-jela"]);
  }
  }else{
      this.error = 1;
    }
  }


  getSveRestorane(){
    if (localStorage.getItem("rolaid") == "1") {
    this.res.getRestoranPoUseru().subscribe(data=>{
      this.restorani = data;
      console.log(data);
    });
  }else{
    this.res.getSviRestorani().subscribe(data=>{
      this.restorani = data;
      console.log(data);
    });
  }
  }
get nazivjela() {
  return this.form.get('nazivjela');
}

get cena() {
  return this.form.get('cena');
}

get opis() {
  return this.form.get('opis');
}


get restoran() {
  return this.form.get('restoran');
}
}