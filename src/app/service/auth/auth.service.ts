import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkrole(){
    return localStorage.getItem("rolaid");
  }

  checkstatus(){
    return localStorage.getItem("status");
  }
}
