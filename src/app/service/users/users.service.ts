import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "http://localhost/it255proj";

  constructor(private http: HttpClient) { }

  createUser(naziv,pib,adresa,ime,prezime,datumRodjenja,telefon,username,password,email) {
    return this.http.post(this.url + "/index.php", {
      "naziv": naziv,
      "pib": pib, 
      "adresa": adresa,
      "ime": ime,
      "prezime": prezime,
      "datumRodjenja" : datumRodjenja,
      "telefon": telefon,
      "username" : username,
      "password" : password,
      "email": email
    });
  }

  createOnlyUser(ime,prezime,datumRodjenja,telefon,username,password,email) {
    return this.http.post(this.url + "/createUser.php", {
      "ime": ime,
      "prezime": prezime,
      "datumRodjenja" : datumRodjenja,
      "telefon": telefon,
      "username" : username,
      "password" : password,
      "email": email
    });
  }


  getSveUseri(){
    return this.http.get(this.url + "/prikaziUsere.php");
  }

  
  getUserById(iduser) {
    console.log("iduser: " +  iduser)
    return this.http.post(this.url + "/getUserById.php", {
      "iduser" : iduser
    });
  }


  updateUser(iduser, ime, prezime, datumrodjenja,telefon,email) {
    return this.http.put(this.url + "/updateUser.php", {
        "iduser": iduser,
        "ime": ime,
        "prezime": prezime,
        "datumrodjenja": datumrodjenja,
        "telefon": telefon,
        "email": email
    });
  }
}
