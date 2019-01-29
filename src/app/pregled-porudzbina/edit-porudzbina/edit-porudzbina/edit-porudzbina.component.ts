import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { PorudzbineService } from '../../../service/porudzbine/porudzbine.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-porudzbina',
  templateUrl: './edit-porudzbina.component.html',
  styleUrls: ['./edit-porudzbina.component.css']
})
export class EditPorudzbinaComponent implements OnInit {
  error = 0;
  idporudzbina = "";
  form = new FormGroup({
    datumIsporuke: new FormControl('', Validators.required),
    vremeIsporuke: new FormControl('', Validators.required),
    adresa: new FormControl('', Validators.required),
    kolicina: new FormControl('', Validators.required)
  });

  constructor(private ser: PorudzbineService, private arou: ActivatedRoute, private rout: Router) { }


  ngOnInit() {
    this.arou.paramMap.subscribe(params => {
      this.idporudzbina = params.get("idporudzbina");
      console.log("ovde: " + this.idporudzbina);
      if (this.idporudzbina != "") {
        this.getPorudzbina();
      }
    });
  }

  submitData() {
    if (this.form.valid == true) {
      this.ser.updatePorudzbina(this.idporudzbina, this.datumIsporuke.value, this.vremeIsporuke.value, this.adresa.value, this.kolicina.value).subscribe(data => {
        console.log(data);
        if (localStorage.getItem("rolaid") == "1") {
          this.rout.navigate(["/pregled-porudzbina"]);
        } else {
          this.rout.navigate(["/pregled-svih-porudzbina"]);
        }
      });
    } else {
      this.error = 1;
    }
  }



  getPorudzbina() {
    this.ser.getPorudzbinaById(this.idporudzbina).subscribe(data => {
      let pom: any = data[0];
      console.log("!!! " + pom);
      this.form.get('datumIsporuke').setValue(pom.DATUMISPORUKE);
      this.form.get('vremeIsporuke').setValue(pom.VREMEISPORUKE);
      this.form.get('adresa').setValue(pom.ADRESAISPORUKE);
      this.form.get('kolicina').setValue(pom.KOLICINA);
    });
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
