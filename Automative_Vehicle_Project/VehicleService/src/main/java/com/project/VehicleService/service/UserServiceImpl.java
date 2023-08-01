package com.project.VehicleService.service;


import com.project.VehicleService.domain.Users;
import com.project.VehicleService.domain.Vehicle;
import com.project.VehicleService.execption.UserAlreadyExists;
import com.project.VehicleService.execption.VehicleAlreadyExists;
import com.project.VehicleService.execption.VehicleNotFound;
import com.project.VehicleService.proxy.UserProxy;
import com.project.VehicleService.repository.UserRepository;
import com.project.VehicleService.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProxy userProxy;
    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public Users register(Users users) throws UserAlreadyExists {
        if(userRepository.findById(users.getEmail()).isPresent()){
            throw new UserAlreadyExists();
        }
        Users details = userRepository.save(users);
        if(!details.getEmail().isEmpty()){
            userProxy.saveUsers(users);
        }
        return details;
    }

    @Override
    public List<Vehicle> getVehicleDetails(String email) throws VehicleNotFound {
        if(!userRepository.findById(email).isPresent()){
            throw new VehicleNotFound();
        }
        return userRepository.findById(email).get().getVehicles();
    }

    @Override
    public Users addVehicleToCart(String email, Vehicle vehicle) throws VehicleNotFound, VehicleAlreadyExists {
        if(userRepository.findById(email).isEmpty()){

            throw new VehicleNotFound();
        }


        Users users = userRepository.findById(email).get();
        List<Vehicle> list = users.getVehicles();
        for(Vehicle vh: list){
            if(vh.equals(vehicle)){
                throw new VehicleAlreadyExists();
            }
        }
        users.getVehicles().add(vehicle);
        System.out.println(users);
        return userRepository.save(users);

    }

    @Override
    public boolean deleteVehicleFromCart(String model, String email) throws VehicleNotFound {

        Users info = userRepository.findById(email).get();
        List<Vehicle> list = info.getVehicles();

        if(!userRepository.findById(email).get().getVehicles().isEmpty()){
            for(Vehicle vh:list){
                if(vh.getModel().equals(model)){
                    System.out.println("IM INSIDE");
                   list.remove(vh);
                    info.setVehicles(list);
                    userRepository.save(info);
                    return true;
                }
            }
        }
       return false;
    }

    @Override
    public Users getAllUserDetails(String email) {

        System.out.println(userRepository.findById(email).get());
        return userRepository.findById(email).get();
    }
}
