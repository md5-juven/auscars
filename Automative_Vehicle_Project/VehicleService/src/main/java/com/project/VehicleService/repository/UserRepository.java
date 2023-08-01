package com.project.VehicleService.repository;

import com.project.VehicleService.domain.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<Users, String> {
}
