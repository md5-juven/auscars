import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleRouterService {

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigate([""]);
  }

  navigateToCars(){
    this.router.navigate(["dashboard"])
  }

  navigateToLogin(){
    this.router.navigate(["login"])
  }

  navigateToCart(){
    this.router.navigate(["user-cart"])
  }

  navigateToRegister(){
    this.router.navigate(["register"])
  }
  
}
