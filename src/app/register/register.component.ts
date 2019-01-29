import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users/users.service';
import { RestoraniService } from '../service/restorani/restorani.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerError = 0;



  form = new FormGroup({
    naziv: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    pib: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    adresa: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    ime: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    prezime: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    datumrodjenja: new FormControl('', Validators.required),
    telefon: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    username: new FormControl('',[Validators.required, Validators.maxLength(65)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(65)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(65), Validators.email])
  });

  constructor(private users: UsersService, private res: RestoraniService, private rou: Router) { }

  ngOnInit() {
  }

submitData() {
  if(this.form.valid){
    this.users.createUser(this.naziv.value, this.pib.value,this.adresa.value,this.ime.value,this.prezime.value,this.datumrodjenja.value,this.telefon.value,
    this.username.value,this.password.value,this.email.value).subscribe(data=>{
  });
  this.rou.navigate(["/login"]);
}else{
    this.registerError = 1;
  }
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

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
