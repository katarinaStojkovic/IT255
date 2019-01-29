import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost/it255proj";

  constructor(private http: HttpClient) { }

  getLogin(username,password) {
    return this.http.post(this.url + "/login.php", {
      "username" : username,
      "password": password
    });
  }
}
