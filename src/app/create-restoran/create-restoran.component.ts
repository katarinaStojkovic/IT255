import { Component, OnInit } from '@angular/core';
import { RestoraniService } from '../service/restorani/restorani.service';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';

@Component({
  selector: 'app-create-restoran',
  templateUrl: './create-restoran.component.html',
  styleUrls: ['./create-restoran.component.css']
})
export class CreateRestoranComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl('', Validators.required),
    naziv: new FormControl('', Validators.required),
    pib: new FormControl('', Validators.required),
    adresa: new FormControl('', Validators.required)
  });

  constructor(private ser: UsersService, private res: RestoraniService, private rou: Router) { }

  useri: any = [];
  error = 0;
  ngOnInit() {
    this.getSveUsere();
    console.log(this.useri);
  }


  submitData() {
    if (this.form.valid == true) {
      console.log(this.form.value);
      this.res.createRestoran(this.user.value, this.naziv.value, this.pib.value, this.adresa.value).subscribe(data => {
        console.log(data);
        this.rou.navigate(["/pregled-restorana"]);
      });
    } else {
      this.error = 1;
    }
  }


  getSveUsere() {
    this.ser.getSveUseri().subscribe(data => {
      this.useri = data;
      console.log(data);
    });
  }

  get naziv() {
    return this.form.get('naziv');
  }

  get pib() {
    return this.form.get('pib');
  }

  get adresa() {
    return this.form.get('adresa');
  }


  get user() {
    return this.form.get('user');
  }
}
