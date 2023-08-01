package com.project.VehicleService.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserAddress {

    private String state;
    private String city;
    private String street;
    private String landMark;
    private long zipCode;

}
