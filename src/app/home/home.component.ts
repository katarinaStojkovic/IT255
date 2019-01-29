import { Component, OnInit } from '@angular/core';
import { RestoraniService } from '../service/restorani/restorani.service';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { JelaService } from '../service/jela/jela.service';
import { PorudzbineService } from '../service/porudzbine/porudzbine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeError = 0;
  message = 0;
  form = new FormGroup({
    restoran: new FormControl('', Validators.required),
    jelo: new FormControl('', Validators.required),
    datumIsporuke: new FormControl('', Validators.required),
    vremeIsporuke: new FormControl('', Validators.required),
    adresa: new FormControl('', Validators.required),
    kolicina: new FormControl('', Validators.required)
  });

  restorani: any = [];

  jela: any = [];


  constructor(private ser: RestoraniService, private sje: JelaService, private pors: PorudzbineService, private rou: Router) { }

  ngOnInit() {
    this.getSveRestorane();
    console.log(this.restorani);
  }


  getSveRestorane() {
    this.ser.getSviRestorani().subscribe(data => {
      this.restorani = data;
      console.log(data);
    });
  }
  
  submitData() {
    if (this.form.valid) {
      this.pors.createPorudzbine(this.jelo.value, this.datumIsporuke.value, this.vremeIsporuke.value, this.adresa.value, this.kolicina.value).subscribe(data => {
        if (data['message'] == 0) {
          this.message = 1;
          if (this.message == 1) {
            this.homeError = 0;
          }
          this.form.reset();
        }
      });
    } else {
      this.homeError = 1;
      if (this.homeError == 1) {
        this.message = 0;
      }
    }
  }

  getSveJelaPoRestoranu(param) {
    this.jela = [];
    this.sje.getJelaPoRestoranu(param).subscribe(data => {
      this.jela = data;
      console.log(data);
    });
  }

  get restoran() {
    return this.form.get('restoran');
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
