package com.project.VehicleService.service;


import com.project.VehicleService.domain.Users;
import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.VehicleNotFound;
import com.project.VehicleService.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle updateVehicleDetails(Vehicle vehicle) throws VehicleNotFound {
        Vehicle updateDetails = vehicleRepository.findById(vehicle.getModel()).get();
        if(vehicleRepository.findById(vehicle.getModel()).isEmpty()){
            throw new VehicleNotFound();
        }
//        Vehicle existDetails = updateDetails.get();
        if(vehicle.getModel()!=null){
            updateDetails.setModel(vehicle.getModel());
        }
        if(vehicle.getVehicleName()!=null){
            updateDetails.setVehicleName(vehicle.getVehicleName());
        }
        if(vehicle.getPrice()!=0){
            updateDetails.setPrice(vehicle.getPrice());
        }
        if(vehicle.getDescription()!=null){
            updateDetails.setDescription(vehicle.getDescription());
        }
        if(vehicle.getPhoto()!=null){
            updateDetails.setPhoto(vehicle.getPhoto());
        }
        System.out.println(updateDetails);
        return vehicleRepository.save(updateDetails);
    }

    @Override
    public boolean deleteVehicleDetails(String model) throws VehicleNotFound {
        if(!vehicleRepository.findById(model).isPresent()){
            throw new VehicleNotFound();
        }
        vehicleRepository.deleteById(model);
        return true;
    }

    @Override
    public List<Vehicle> getAllDetails() {
        return vehicleRepository.findAll();
    }

    @Override
    public Vehicle findByVehicleNames(String model) throws VehicleNotFound {
        if(!vehicleRepository.findById(model).isPresent()){
            throw new VehicleNotFound();
        }
        System.out.println("My Name"+vehicleRepository.findById(model).get());
        return vehicleRepository.findById(model).get();
    }







}
