package com.project.VehicleService.repository;


import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.VehicleNotFound;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends MongoRepository<Vehicle, String> {

    String findByModel(String model) throws VehicleNotFound;
}
