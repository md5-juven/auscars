import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(){}

  loggedIn: boolean = false;

  login(value: any){
    this.loggedIn = value === localStorage.getItem('token');
    return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    localStorage.clear();
  }
}
