import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  error = 0;
  iduser = "";
  form = new FormGroup({
    ime: new FormControl('', Validators.required),
    prezime: new FormControl('', Validators.required),
    datumrodjenja: new FormControl('', Validators.required),
    telefon: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private ser: UsersService, private arou: ActivatedRoute, private rout: Router) { }


  ngOnInit() {
    this.arou.paramMap.subscribe(params => {
      this.iduser = params.get("iduser");
      console.log("ovde: " + this.iduser);
      if (this.iduser != "") {
        this.getUser();
      }
    });
  }

  submitData() {
    if (this.form.valid == true) {
      this.ser.updateUser(this.iduser, this.ime.value, this.prezime.value, this.datumrodjenja.value, this.telefon.value,this.email.value).subscribe(data => {
        console.log(data);
          this.rout.navigate(["/pregled-usera"]);
      });
    } else {
      this.error = 1;
    }
  }



  getUser() {
    this.ser.getUserById(this.iduser).subscribe(data => {
      let pom: any = data[0];
      console.log("!!! " + pom);
      this.form.get('ime').setValue(pom.IME);
      this.form.get('prezime').setValue(pom.PREZIME);
      this.form.get('datumrodjenja').setValue(pom.DATUMRODJENJA);
      this.form.get('telefon').setValue(pom.TELEFON);
      this.form.get('email').setValue(pom.EMAIL);
    });
  }


  get ime() {
    return this.form.get('ime');
  }

  get prezime() {
    return this.form.get('prezime');
  }

  get datumrodjenja() {
    return this.form.get('datumrodjenja');
  }


  get telefon() {
    return this.form.get('telefon');
  }

  get email() {
    return this.form.get('email');
  }
}
