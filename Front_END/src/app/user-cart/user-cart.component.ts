import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Vehicle } from '../model/vehicle';
import { VehicleRouterService } from '../services/vehicle-router.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {


  userVehicle: Vehicle[] = [];
  operations: Vehicle = {};

  constructor(private vehicleService: VehicleService, private vehicleRoute: VehicleRouterService, private activatedRoute: ActivatedRoute, private snack: MatSnackBar){}

  ngOnInit(): void{
      this.vehicleService.getUserCar().subscribe({
        next: data =>{
          console.log(data);
          this.userVehicle=data;
          
        },
        error: err =>{
          console.log(err);
          this.snack.open('Car Already Exists In CART', 'OK' ,{
            duration: 3000,
            panelClass: ["mat-toolbar", "mat-accent"]
          });
        }
      })
      this.activatedRoute.paramMap.subscribe(data =>{
        let model = data.get('model') ?? "";
        console.log(model);
        this.vehicleService.getUSERcart(`${model}`).subscribe(data =>{
          console.log(data);
          this.operations=data;
          console.log(this.operations.model);
        })
      })
  }

  deleteCart(model: any){
    if(!this.operations.model){
      this.vehicleService.deleteCart(model).subscribe(() =>{
        this.snack.open('Removed From Cart', 'OK' ,{
          duration: 3000,
          panelClass: ["mat-toolbar", "mat-warn"]
        });
        this.ngOnInit();
      })
    }
    else{
      alert("ALREADY IN YOUR CART !");
    }
  }
}
