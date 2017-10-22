package com.example.robotstore.controllers;

import com.example.robotstore.models.Robot;
import com.example.robotstore.repositories.RobotRepository;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RobotController {

  @Autowired
  RobotRepository robotRepository;

  @GetMapping("/robots")
  public List<Robot> getAllRobots() {
    Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");

    return robotRepository.findAll(sortByCreatedAtDesc);
  }

  @PostMapping("/robots")
  public Robot createRobot(@Valid @RequestBody Robot robot) {
    return robotRepository.save( robot );
  }

  @GetMapping(value="/robots/{id}")
  public ResponseEntity<Robot> getRobotById(@PathVariable("id") String id) {
    Robot robot = robotRepository.findOne(id);

    if (robot == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      return new ResponseEntity<>(robot, HttpStatus.OK);
    }
  }

  @PutMapping(value="/robots/{id}")
  public ResponseEntity<Robot> updateRobot(@PathVariable("id") String id,
                                          @Valid @RequestBody Robot robot) {
    Robot robotData = robotRepository.findOne(id);
    if (robotData == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    robotData.setCreatedAt(robot.getCreatedAt());
    robotData.setDescription(robot.getDescription());
    robotData.setDimensions(robot.getDescription());
    robotData.setId(robot.getId());
    robotData.setName(robot.getName());
    robotData.setPrice(robot.getPrice());
    robotData.setShipping(robot.getShipping());
    robotData.setSoldby(robot.getSoldby());
    robotData.setUrl(robot.getUrl());
    robotData.setWeight(robot.getWeight());

    Robot updatedRobot = robotRepository.save(robotData);
    return new ResponseEntity<>(updatedRobot, HttpStatus.OK);
  }

  @DeleteMapping(value="/robots/{id}")
  public void deleteRobot(@PathVariable("id") String id) {
    robotRepository.delete(id);
  }
}


