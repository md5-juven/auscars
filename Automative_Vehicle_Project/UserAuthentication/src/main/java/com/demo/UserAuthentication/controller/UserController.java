package com.demo.UserAuthentication.controller;

import com.demo.UserAuthentication.domain.Users;
import com.demo.UserAuthentication.exception.UserAlreadyExists;
import com.demo.UserAuthentication.exception.UserNotFound;
import com.demo.UserAuthentication.services.TokenGenerator;
import com.demo.UserAuthentication.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/automotive/v3")


public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private TokenGenerator tokenGenerator;

    @PostMapping("/register")

    public ResponseEntity<?> registerUser(@RequestBody Users users) throws UserAlreadyExists {
        users.setRole("user");
        return new ResponseEntity<>(userService.saveDetails(users), HttpStatus.CREATED);
    }
//    @PostMapping("/register/admin")
//    public ResponseEntity<?> registerAdmin(@RequestBody Users users) throws UserAlreadyExists {
//        users.setRole("admin");
//        return new ResponseEntity<>(userService.saveDetails(users), HttpStatus.CREATED);
//    }

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody Users users) throws UserNotFound {
//        ResponseEntity responseEntity;
//        Map<String, String> map = null;
//        Users user  = userService.findByEmailAndPassword(users.getEmail(), users.getPassword());
//        if(users.getEmail().equals(user.getEmail())){
//            map = tokenGenerator.generator(users);
//        }
//        responseEntity = new ResponseEntity(map, HttpStatus.OK);
//
//        return responseEntity;
//
//    }

    @PostMapping("/login")

    public ResponseEntity<?> loginCheck(@RequestBody Users users){
        Users result = userService.loginCheck(users);
        if (result!= null){
            return new ResponseEntity<>(tokenGenerator.generator(result), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("Authentication Failed", HttpStatus.OK);
    }

    @GetMapping("/getAll")

    public ResponseEntity<?> getAllDetails(){
        return new ResponseEntity<>(userService.getAllUsers("admin@a.com"), HttpStatus.OK);
    }

}
