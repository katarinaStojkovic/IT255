import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorudzbineService {

  private url = "http://localhost/it255proj";

  constructor(private http: HttpClient) { }

  createPorudzbine(jelo, datumisporuke, vremeisporuke,adresaisporuke,kolicina) {
    return this.http.post(this.url + "/createPorudzbine.php", {
      "idjela" : jelo,
      "datumisporuke": datumisporuke, 
      "vremeisporuke": vremeisporuke,
      "adresaisporuke": adresaisporuke,
      "kolicina": kolicina
    });
  }
  getPorudzbine(){
    return this.http.post(this.url + "/porudzbine.php", {
      "userId": localStorage.getItem("userId")
    } );
  }

  getSvePorudzbine(){
    return this.http.get(this.url + "/prikaziPorudzbine.php");
  }

  deletePorudzbine(idporudzbine) {
    console.log("idporudzbine: " +  idporudzbine)
    return this.http.get(this.url + "/deletePorudzbine.php?idporudzbine=" + idporudzbine);
  }


  getPorudzbinaById(idporudzbina) {
    console.log("idporudzbina: " +  idporudzbina)
    return this.http.post(this.url + "/getPorudzbinaById.php", {
      "idporudzbina" : idporudzbina
    });
  }

  

  updatePorudzbina(idporudzbina, datumIsporuke, vremeIsporuke, adresaisporuke,kolicina) {
    return this.http.put(this.url + "/updatePorudzbina.php", {
        "idporudzbina": idporudzbina,
        "datumIsporuke": datumIsporuke,
        "vremeIsporuke": vremeIsporuke,
        "adresaisporuke": adresaisporuke,
        "kolicina": kolicina
    });
  }
}
