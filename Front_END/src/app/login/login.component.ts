import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthService } from '../services/auth.service';
import { VehicleRouterService } from '../services/vehicle-router.service';
import { VehicleService } from '../services/vehicle.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private build: FormBuilder, private vehicleService: VehicleService, private routerService: VehicleRouterService, private snack: MatSnackBar, private auth: AuthService, private nav: NavBarComponent){}

    loginForm = this.build.group({
      email: [''],
      password: ['']
    })

    
    onSubmit(){
      if(this.loginForm.valid){
        this.vehicleService.loginUser(this.loginForm.value).subscribe( (data:any) => {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          
          console.log(data.role);
          console.log(data.token);
          this.auth.login(data.token);
          if(this.auth.login(data.token)){
            this.nav.changeValue();
            this.snack.open('Login Successfull', 'OK' ,{
              duration: 3000,
              panelClass: ["mat-toolbar", "mat-accent"]
            });
            if(data.role=="user"){
              this.routerService.navigateToCart();
            }
            else{
              this.routerService.navigateToCars();
            }
            
          }
          else{
            this.routerService.navigateToRegister();
          }
        });
      }
      else{
          alert("Please Enter the Correct Credentials !");
          this.loginForm.reset();
      }
       
       
       
       
    }
}
