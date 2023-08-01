import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../model/vehicle';
import { Observable } from 'rxjs';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  RES_URL: string = "http://localhost:9003/automotive/v1/register";
  LOGIN_URL: string = "http://localhost:9003/automotive/v3/login";
  URL: string  = "http://localhost:9003/automotive/v1/user/";
  admin_URL: string = "http://localhost:9003/automotive/v2/admin/";
  URL_admin : string = "http://localhost:9003/automotive/v3/";


  register(user: any){
    return this.http.post(this.RES_URL, user); 
  }

  loginUser(user: any){
    return this.http.post(this.LOGIN_URL, user);
  }

  getAllDetails(): Observable<Array<Vehicle>>{
    // let httpHeaders = new HttpHeaders({
    // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
    // })
    // let requestOptions = {headers : httpHeaders}
    // console.log(requestOptions);
    console.log(this.admin_URL+"get");
    return this.http.get<Array<Vehicle>>(this.admin_URL+"get");
  }

  getAllUserDetails(){
    return this.http.get(this.URL_admin+"getAll");
  }

  getCar(model: string){
    return this.http.get(`${this.admin_URL+"getVehicle"}/${model}`);
  }

  getUSERcart(model: string){
    return this.http.get(`${this.URL+"get"}/${model}`);
  }

  editCar(vehicle: Vehicle){
    return this.http.put<Vehicle>(`${this.admin_URL+"update"}`, vehicle);
  }

  deleteCar(model: any): any{
    return this.http.delete(`${this.admin_URL+"delete"}/${model}`);
  }

  getUserCar(): Observable<Array<Vehicle>>{
    return this.http.get<Array<Vehicle>>(`${this.URL+"get"}`);
  }

  addCar(vehicle: Vehicle){
    // let httpHeaders = new HttpHeaders({
      // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
    // })
    // let requestOptions = {headers : httpHeaders}
    return this.http.post<Vehicle>(this.admin_URL+"add", vehicle);
  }

  addToCart(vehicle: Vehicle){
    return this.http.post<Vehicle>(this.URL+"add", vehicle);
  }

  deleteCart(model: any): any{
    return this.http.delete(`${this.URL+"delete"}/${model}`);
  }
}
