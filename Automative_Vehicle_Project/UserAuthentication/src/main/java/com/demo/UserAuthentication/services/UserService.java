package com.demo.UserAuthentication.services;

import com.demo.UserAuthentication.domain.Users;
import com.demo.UserAuthentication.exception.UserAlreadyExists;
import com.demo.UserAuthentication.exception.UserNotFound;

import java.util.List;

public interface UserService {

    Users saveDetails(Users users) throws UserAlreadyExists;
    Users findByEmailAndPassword(String email, String password) throws UserNotFound;
    Users loginCheck(Users users);

    Users getAllUsers(String email);


}
