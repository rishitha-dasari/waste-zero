package com.waste_zero.backend.controller;

import com.waste_zero.backend.model.User;
import com.waste_zero.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        // Set default role
        user.setRole("USER");

        return repo.save(user);
    }
}