import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { JelaService } from '../service/jela/jela.service';
import { PorudzbineService } from '../service/porudzbine/porudzbine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-porudzbina',
  templateUrl: './create-porudzbina.component.html',
  styleUrls: ['./create-porudzbina.component.css']
})
export class CreatePorudzbinaComponent implements OnInit {
   form = new FormGroup({
    jelo: new FormControl('', Validators.required),
    datumIsporuke: new FormControl('', Validators.required),
    vremeIsporuke: new FormControl('', Validators.required),
    adresa: new FormControl('', Validators.required),
    kolicina: new FormControl('', Validators.required)
  });
  error = 0;
  jela:any = [];

  constructor(private ser: JelaService, private pors: PorudzbineService, private rou: Router) { }


  
  ngOnInit() {
    this.getSveJela();
    console.log(this.jela);
  }


  
  submitData() {
    if(this.form.valid == true){
    if (localStorage.getItem("rolaid") == "1") {
    console.log("111111 "+this.vremeIsporuke.value);
    this.pors.createPorudzbine(this.jelo.value, this.datumIsporuke.value, this.vremeIsporuke.value,this.adresa.value,this.kolicina.value).subscribe(data =>{
    console.log(data);
    this.rou.navigate(["/pregled-porudzbina"]);
  });
}else{
  this.rou.navigate(["/pregled-svih-porudzbina"]);
}
}else{
  this.error = 1;
}
  }

  getSveJela(){
    if (localStorage.getItem("rolaid") == "1") {
    this.ser.getJela().subscribe(data=>{
      this.jela = data;
      console.log(data);
    });
  }else{
    this.ser.getSveJela().subscribe(data=>{
      this.jela = data;
      console.log(data);
    });
  }
  }

  get jelo() {
    return this.form.get('jelo');
  }

  get datumIsporuke() {
    return this.form.get('datumIsporuke');
  }

  get vremeIsporuke() {
    return this.form.get('vremeIsporuke');
  }

  get adresa() {
    return this.form.get('adresa');
  }


  get kolicina() {
    return this.form.get('kolicina');
  }
}
