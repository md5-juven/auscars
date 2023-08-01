package com.demo.UserAuthentication.services;

import com.demo.UserAuthentication.domain.Users;

import java.util.Map;

public interface TokenGenerator {

    Map<String, String> generator(Users users);
}
