import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../model/admin';
import { Vehicle } from '../model/vehicle';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthService } from '../services/auth.service';
import { VehicleRouterService } from '../services/vehicle-router.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  vehicles: Vehicle[] = [];
  operations: Vehicle = {};

  users: Admin = {};

  cardVisible = false;

  constructor(private vehicleService: VehicleService, private auth: AuthService, private router: VehicleRouterService, private navbar: NavBarComponent, private snack: MatSnackBar){}

  ngOnInit(): void{
    
      this.vehicleService.getAllDetails().subscribe({
        next: data => {
          this.vehicles = data;
          console.log(data);
        }
      })
      this.vehicleService.getAllUserDetails().subscribe({
        next:data =>{
          this.users=data;
          console.log(this.users.role);
          let role = localStorage.getItem('role');
          console.log(role);
          if(role === "admin"){
            console.log("Hello this is admin");
            this.cardVisible=true;
            this.navbar.changeValue();
          }
        }
      })
  }

  refresh(): void {
    window.location.reload();
    localStorage.clear()
  }

  mouseOnClick(model: any){
    this.vehicleService.getCar(model).subscribe({
      next: data =>{
        console.log(data);
        
        this.operations=data;
        console.log(this.operations);
        console.log(this.operations.model);
        if(this.operations && this.checkLogin()){
          this.vehicleService.addToCart(this.operations).subscribe({
            next: data =>{
              console.log(data);
              this.snack.open('VEHICLE added to your cart', 'OK' ,{
                duration: 3000,
                panelClass: ["mat-toolbar", "mat-accent"]
              });
              this.router.navigateToCart();
            },
            error: err =>{
              console.log(err);
              this.snack.open('Car Already Exists In CART', 'OK' ,{
                duration: 3000,
                panelClass: ["mat-toolbar", "mat-accent"]
              });
            }
          })
        }
        else{
          alert("Please Login/Register to add to cart");
          this.router.navigateToLogin();
        }
      }
    })
  }


  onAdd(vehicle: Vehicle){
    this.vehicles.push(vehicle);
  }

  onSearchTextChanged(searchText: any){
    this.vehicleService.getAllDetails().subscribe({
      next: data =>{
        if(searchText===''|| !searchText){
          this.vehicles=data;
        }
        else{
          this.vehicles=data;
          this.vehicles = this.vehicles.filter(vehicleText => vehicleText.vehicleName?.includes(searchText));
        }
      },
      error: err =>{
        alert("Network Error Please try Again");
        console.log(err);   
      }
    })
  }

  value: boolean = false;
  
  checkLogin(): any{
    if(this.auth.loggedIn){
       return this.value = true;
    }
  }

  addToCart(){
    if(this.value){
      this.vehicleService.addCar(this.operations).subscribe({
        next: data =>{
          console.log(data);
        },
        error: err =>{
          console.log(err);
          
        }
      })
    }
    else{
      alert("Please Login to Add to Cart");
    }
  }
}
