package com.project.VehicleService.execption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Vehicle Already Exists")
public class VehicleAlreadyExists extends Exception{
}
