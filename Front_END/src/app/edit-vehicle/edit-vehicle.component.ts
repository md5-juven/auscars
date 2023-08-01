import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../model/vehicle';
import { VehicleRouterService } from '../services/vehicle-router.service';
import { VehicleService } from '../services/vehicle.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {
  
  vehicle: Vehicle = {};

  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute, private vehicleRoute: VehicleRouterService){}

  ngOnInit(): void{

    this.activatedRoute.paramMap.subscribe(data =>{
      console.log(data);
      // alert("Confirm MODEL NAME BELOW TO SAVE CHANGES");
      let model = data.get('model') ?? "";
      console.log(model);
      this.vehicleService.getCar(`${model}`).subscribe(data =>{
          console.log(data);
          this.vehicle=data;
          console.log(this.vehicle.model);
          
          this.status=false;  
      })
    })
  }

  onSelectFile(event: any){
    if(event.target.files){
      let readFile = new FileReader();
      readFile.readAsDataURL(event.target.files[0]);
      readFile.onload = (e: any) =>{
        this.vehicle.photo = e.target.result;
      }
    }
  }

  editCar(){
    this.vehicleService.editCar(this.vehicle).subscribe(data =>{
      this.vehicle=data;
      this.status=true;
      this.vehicleRoute.navigateToCars();
    })
  }


  deleteCar(){
    if(this.vehicle){
      this.vehicleService.deleteCar(String(this.vehicle.model)).subscribe(() =>{
        alert("Vehicle Deleted Sucessfully");
        this.status=true;
        this.vehicleRoute.navigateToCars();
      })
    }
    else{
      alert("Network Error Please try Again Later!");
    }
  }

  status: boolean = false;

  canDeactivate(){
    if(!this.status){
      this.status = confirm("You have not saved any changes, Are you sure you want to leave?");
    }
    return this.status;
  }
}

