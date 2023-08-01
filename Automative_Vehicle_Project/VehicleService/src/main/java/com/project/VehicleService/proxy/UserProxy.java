package com.project.VehicleService.proxy;

import com.project.VehicleService.domain.Users;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-authentication", url = "http://localhost:8001")
public interface UserProxy {

    @PostMapping("/automotive/v3/register")
    public ResponseEntity saveUsers(@RequestBody Users user);
}
