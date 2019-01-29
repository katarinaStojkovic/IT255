import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JelaService {


  private url = "http://localhost/it255proj";

  constructor(private http: HttpClient) { }

  createJelo(restoran,naziv, cena, opis) {
    console.log("!!! " +  restoran)
    console.log("!!! " +  naziv)
    console.log("!!! " +  cena)
    console.log("!!! " +  opis)
    return this.http.post(this.url + "/createJelo.php", {
      "idrestorana" : restoran,
      "nazivjela": naziv,
      "cena": cena, 
      "opis": opis
    });
  }

  getJela(){
    return this.http.post(this.url + "/jelaPoUseru.php", {
      "userId": localStorage.getItem("userId")
    } );
  }

  getJelaPoRestoranu(restoranId){
    return this.http.post(this.url + "/jelaPoRestoranu.php", {
      "idrestorana" : restoranId
    });
  }

  deleteJela(idjela) {
    console.log("idjela: " +  idjela)
    return this.http.get(this.url + "/deleteJela.php?jeloid=" + idjela);
  }

  
  getJeloById(jeloid) {
    console.log("idjela: " +  jeloid)
    return this.http.post(this.url + "/getJeloById.php", {
      "jeloid" : jeloid
    });
  }


  getSveJela(){
    return this.http.get(this.url + "/prikaziJela.php");
  }

  updateJelo(idjela, naziv, cena, opis) {
    console.log(naziv);
    return this.http.put(this.url + "/updateJelo.php", {
        "idjela": idjela,
        "naziv": naziv,
        "cena": cena,
        "opis": opis
    });
  }
}
