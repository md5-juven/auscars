package com.project.VehicleService.service;

import com.project.VehicleService.domain.Users;
import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.VehicleNotFound;

import java.util.List;

public interface VehicleService {

    Vehicle addVehicle(Vehicle vehicle);
    Vehicle updateVehicleDetails(Vehicle vehicle) throws VehicleNotFound;
    boolean deleteVehicleDetails(String model) throws VehicleNotFound;
    List<Vehicle> getAllDetails();

    Vehicle findByVehicleNames(String model) throws VehicleNotFound;

}
