package com.project.VehicleService.service;

import com.project.VehicleService.domain.Users;
import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.UserAlreadyExists;
import com.project.VehicleService.execption.UserNotFound;
import com.project.VehicleService.execption.VehicleAlreadyExists;
import com.project.VehicleService.execption.VehicleNotFound;

import java.util.List;

public interface UserService {

    Users register(Users users) throws UserAlreadyExists;
    List<Vehicle> getVehicleDetails(String email) throws VehicleNotFound, UserNotFound;
    Users addVehicleToCart(String email, Vehicle vehicle) throws VehicleNotFound, UserNotFound, VehicleAlreadyExists;
    boolean deleteVehicleFromCart(String model, String email) throws  VehicleNotFound;

    Users getAllUserDetails(String email);
}
