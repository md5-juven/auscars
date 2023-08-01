package com.demo.UserAuthentication.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Users {

    @Id
    private String email;
    private String password;

    private String role;
}
