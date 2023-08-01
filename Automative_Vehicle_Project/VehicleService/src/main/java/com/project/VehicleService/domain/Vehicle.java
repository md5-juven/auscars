package com.project.VehicleService.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Vehicle {

    @Id
    private String model;
    private String vehicleName;
    private double price;
    private String description;
    private String photo;

}
