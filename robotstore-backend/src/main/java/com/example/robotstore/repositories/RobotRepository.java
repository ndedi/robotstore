package com.example.robotstore.repositories;

import com.example.robotstore.models.Robot;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RobotRepository extends MongoRepository<Robot, String> {}