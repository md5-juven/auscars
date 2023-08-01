import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private vehicle: EditVehicleComponent, private auth: AuthService) {}

  ngOnInit(): void{
    this.cart=false;
  }

  value: boolean = false;
  cart: boolean = false;

  


  changeValue(){
    let values: any =  localStorage.getItem('role');
    this.value=true;
    console.log("INSIDE CHANGE VALUE");
    console.log(values);
    if(values=="user"){
      console.log("HELLO THIS IS USER")
      this.cart = true;
      console.log(this.cart);
       
    }
      
}
  
  
  logout(){
    if(this.value && !this.vehicle.status){
      this.auth.logout();
      this.value = false;
      this.cart = false;
    }
    else if(this.vehicle.status){
      this.auth.logout();
      this.value = false;
      this.cart = false;
    }
  }
}
