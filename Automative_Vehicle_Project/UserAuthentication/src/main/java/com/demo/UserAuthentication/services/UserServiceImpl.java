package com.demo.UserAuthentication.services;


import com.demo.UserAuthentication.domain.Users;
import com.demo.UserAuthentication.exception.UserAlreadyExists;
import com.demo.UserAuthentication.exception.UserNotFound;
import com.demo.UserAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public Users getAllUsers(String email) {
        return userRepository.findById(email).get();
    }

    @Override
    public Users saveDetails(Users users) throws UserAlreadyExists {
        return userRepository.save(users);
    }

    @Override
    public Users findByEmailAndPassword(String email, String password) throws UserNotFound {

        return userRepository.findByEmailAndPassword(email, password);
    }

    @Override
    public Users loginCheck(Users users){
        if(userRepository.findById(users.getEmail()).isPresent()){
            Users user1 = userRepository.findById(users.getEmail()).get();
            if(user1.getPassword().equals(users.getPassword())){
                return user1;
            }
            else
                return null;

        }
        else
            return null;
    }
}
