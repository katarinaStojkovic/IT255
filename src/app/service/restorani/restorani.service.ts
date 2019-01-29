import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoraniService {

  private url = "http://localhost/it255proj";

  constructor(private http: HttpClient) { }

  createRestoran(userid,naziv,pib,adresa) {
    return this.http.post(this.url + "/createRestoran.php", {
      "userid" : userid,
      "naziv": naziv, 
      "pib": pib,
      "adresa": adresa
    });
  }

  getRestorani(){
    return this.http.get(this.url + "/restoran.php");
  }

  getSviRestorani(){
    return this.http.get(this.url + "/prikaziRestoranje.php");
  }

  deleteRestoran(idrestorana) {
    console.log("idrestorana: " +  idrestorana)
    return this.http.get(this.url + "/deleteRestoran.php?idrestorana=" + idrestorana);
  }

  getRestoranById(idrestorana) {
    console.log("idrestorana: " +  idrestorana)
    return this.http.post(this.url + "/getRestoranById.php", {
      "idrestorana" : idrestorana
    });
  }

  getRestoranPoUseru(){
    return this.http.post(this.url + "/restoraniPoUseru.php", {
      "userid": localStorage.getItem("userId")
    } );
  }
}
