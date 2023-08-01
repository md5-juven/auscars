package com.project.VehicleService.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class Users {

    @Id
    private String email;
    private String password;
    private long phoneNo;
    private String role;
    private UserAddress address;
    private List<Vehicle> vehicles;
}
