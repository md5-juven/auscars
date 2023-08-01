package com.demo.UserAuthentication.services;

import com.demo.UserAuthentication.domain.Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtTokenGenerator implements TokenGenerator {

    @Override
    public Map<String, String> generator(Users users) {
        String token = null;
        Map<String, String> result =  new HashMap<>();
//        users.setPassword("");
        Map<String, Object> userData = new HashMap<>();
        userData.put("user_role", users.getRole());
        userData.put("user_email", users.getEmail());
        token = Jwts.builder()
                .setClaims(userData)
                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis()+Expire_duration))
                .signWith(SignatureAlgorithm.HS256, "sujay").compact();


        result.put("token", token);
        result.put("message","Successfully Logged In!");
        result.put("role",users.getRole());

        return result;
    }
}
