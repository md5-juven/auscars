package com.demo.UserAuthentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "User Already Exist")
public class UserAlreadyExists extends Exception{
}
