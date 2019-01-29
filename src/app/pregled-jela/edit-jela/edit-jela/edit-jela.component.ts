import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { JelaService } from '../../../service/jela/jela.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-jela',
  templateUrl: './edit-jela.component.html',
  styleUrls: ['./edit-jela.component.css']
})
export class EditJelaComponent implements OnInit {
  idjela = "";
  error = 0;
  form = new FormGroup({
    nazivjela: new FormControl('', Validators.required),
    cena: new FormControl('', Validators.required),
    opis: new FormControl('', Validators.required)
  });
  constructor(private ser: JelaService, private arou: ActivatedRoute, private rout: Router) { }

  ngOnInit() {
    this.arou.paramMap.subscribe(params => {
      this.idjela = params.get("idjela");
      console.log("ovde: " + this.idjela);
      if (this.idjela != "") {
        this.getJelo();
      }
    });
  }

  updateJelo() {
    if (this.form.valid == true) {
      this.ser.updateJelo(this.idjela, this.nazivjela.value, this.cena.value, this.opis.value).subscribe(data => {
        console.log(data);
        if (localStorage.getItem("rolaid") == "1") {
          this.rout.navigate(["/pregled-jela"]);
        } else {
          this.rout.navigate(["/pregled-svih-jela"]);
        }
      });
    } else {
      this.error = 1;
    }
  }

  getJelo() {
    this.ser.getJeloById(this.idjela).subscribe(data => {
      let pom: any = data[0];
      console.log("!!! " + pom);
      this.form.get('nazivjela').setValue(pom.NAZIVJELA);
      this.form.get('cena').setValue(pom.CENA);
      this.form.get('opis').setValue(pom.OPIS);
    });
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

}

