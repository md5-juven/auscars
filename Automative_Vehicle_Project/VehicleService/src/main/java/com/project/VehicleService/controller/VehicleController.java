package com.project.VehicleService.controller;


import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.VehicleNotFound;
import com.project.VehicleService.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/automotive/v2")

public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/admin/add")
    public ResponseEntity<?> addNewVehicles(@RequestBody Vehicle vehicle){
        return new ResponseEntity<>(vehicleService.addVehicle(vehicle), HttpStatus.CREATED);
    }

    @PutMapping("/admin/update")
    public ResponseEntity<?> updateVehicles(@RequestBody Vehicle vehicle, HttpServletRequest httpServletRequest) throws VehicleNotFound {
        ResponseEntity responseEntity = null;
        try {
            System.out.println(vehicle);
            String role = (String) httpServletRequest.getAttribute("role");
            System.out.println(role);

                System.out.println("hello");
                responseEntity =  new ResponseEntity<>(vehicleService.updateVehicleDetails(vehicle), HttpStatus.OK);

        }
        catch (VehicleNotFound e){
            throw new VehicleNotFound();
        }
        return responseEntity;
    }

    @DeleteMapping("/admin/delete/{model}")
    public ResponseEntity<?> deleteVehicles(@PathVariable("model") String model) throws VehicleNotFound{
        return new ResponseEntity<>(vehicleService.deleteVehicleDetails(model), HttpStatus.OK);
    }

    @GetMapping("/admin/get")
    public ResponseEntity<?> getVehicles(){
        return new ResponseEntity<>(vehicleService.getAllDetails(), HttpStatus.OK);
    }

    @GetMapping("/admin/getVehicle/{model}")
    public ResponseEntity<?> getVehicle(@PathVariable("model") String model) throws VehicleNotFound {
        System.out.println("Helloo"+model);
        return new ResponseEntity<>(vehicleService.findByVehicleNames(model), HttpStatus.OK);
    }

}
