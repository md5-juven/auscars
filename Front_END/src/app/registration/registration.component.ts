import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Address } from '../model/address';
import { VehicleRouterService } from '../services/vehicle-router.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  addresses: Address[]=[];

  constructor(private build: FormBuilder, private snack: MatSnackBar, private vehicleService: VehicleService, private router: VehicleRouterService){}

  ngOnInit(): void{
    console.log(this.detailsForm.valid);
    document.body.style.backgroundColor="black";    
    
    
    // for(let add of this.addresses){
      // console.log("Inside For");
      // 
      // if(add.state=="Tamil Nadu"){
        // console.log(add.districts);
      // }
    // }
  }

  address: [] =  []

  detailsForm = this.build.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    phoneNo: ['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.build.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      landMark: [''],
      zipCode: ['', Validators.required]
    })
  })


  onSubmit(){
    if(this.detailsForm.valid)
    this.vehicleService.register(this.detailsForm.value).subscribe();
    console.log(this.detailsForm.value);
    this.router.navigateToLogin();

    this.snack.open('REGISTERED Thankyou', 'Ok' ,{
      duration: 3000,
      panelClass: ["mat-toolbar", "mat-primary"]
    });
   }
}
