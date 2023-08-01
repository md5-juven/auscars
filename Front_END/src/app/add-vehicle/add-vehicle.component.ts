import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {

  vehicle: Vehicle = {};
  cardVisible = false;

  constructor(private vehicleService: VehicleService, private snackBar: MatSnackBar){}

  ngOnInit(): void{
  }

  @Output()
  vehicleAdded: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  onSelectFile(event: any){
    if(event.target.files){
      let readFile = new FileReader();
      readFile.readAsDataURL(event.target.files[0]);
      readFile.onload = (e: any) =>{
        this.vehicle.photo = e.target.result;
      }
    }
  }

  onSubmit(addForm: any){
    console.log(addForm.value);
    if(this.vehicle){
    this.vehicleService.addCar(this.vehicle).subscribe({
      next: data =>{
        this.vehicleAdded.emit(this.vehicle);
        this.cardVisible=false;
        this.ngOnInit();
        this.snackBar.open('Vehicle added Successfully', 'OK', {
          duration: 3000,
          panelClass: ['snackBar-color']
        });
        
      },
      error: e => {
        this.snackBar.open('Failed to Add the Note due to Network Error !! Please Try Again Later', 'Failure', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    })
  }
  else{
    alert("MODEL NAME ALREADY EXISTS TRY ANOTHER !")
  }
  }
}
