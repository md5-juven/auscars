package com.project.VehicleService.controller;


import com.project.VehicleService.domain.Users;
import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.UserAlreadyExists;
import com.project.VehicleService.execption.UserNotFound;
import com.project.VehicleService.execption.VehicleAlreadyExists;
import com.project.VehicleService.execption.VehicleNotFound;
import com.project.VehicleService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
@RequestMapping("/automotive/v1")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Users users) throws UserAlreadyExists {
        users.setRole("user");
        try{
            if(users.getVehicles()==null){
                users.setVehicles(new ArrayList<>());
            }
            return new ResponseEntity<>(userService.register(users), HttpStatus.CREATED);
        }
        catch (UserAlreadyExists e){
            throw new UserAlreadyExists();
        }
    }


    @GetMapping("/user/getAll")
    public ResponseEntity<?> getUserDetails(HttpServletRequest request){
        String email = (String) request.getAttribute("email_id");
        return new ResponseEntity<>(userService.getAllUserDetails(email), HttpStatus.OK);
    }


    @GetMapping("/user/get")
    public ResponseEntity<?> getVehicles(HttpServletRequest httpServletRequest) throws VehicleNotFound, UserNotFound {
        ResponseEntity responseEntity;
        String email = (String) httpServletRequest.getAttribute("email_id");
        try{
            responseEntity = new ResponseEntity(userService.getVehicleDetails(email), HttpStatus.OK);
        }
        catch (VehicleNotFound e){
            throw new VehicleNotFound();
        }
        catch (UserNotFound e){
            throw new UserNotFound();
        }
        return responseEntity;
    }

    @PostMapping("/user/add")
    public ResponseEntity<?> addVehiclesToCart(HttpServletRequest httpServletRequest, @RequestBody Vehicle vehicle) throws UserNotFound, VehicleNotFound, VehicleAlreadyExists {
        ResponseEntity responseEntity;
        String email = (String) httpServletRequest.getAttribute("email_id");
        try{
            responseEntity = new ResponseEntity(userService.addVehicleToCart(email, vehicle), HttpStatus.OK);
        }
        catch (UserNotFound e){
            throw new UserNotFound();
        }
        catch (VehicleNotFound e){
            throw new VehicleNotFound();
        }
        catch (VehicleAlreadyExists e){
            throw new VehicleAlreadyExists();
        }
        return responseEntity;
    }

    @DeleteMapping("/user/delete/{model}")
    public ResponseEntity<?> deleteFromCart(@PathVariable("model") String model, HttpServletRequest httpServletRequest) throws VehicleNotFound{
        System.out.println(model);
        String email = (String) httpServletRequest.getAttribute("email_id");
        System.out.println(email);
        return new ResponseEntity<>(userService.deleteVehicleFromCart(model, email), HttpStatus.OK);
    }



}
