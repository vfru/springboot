package com.carsever.controller;


import com.carsever.domain.User;
import com.carsever.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class IndexController {
    @GetMapping
    public String Index(){
        return "hello";
    }

    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public List<User> list(){
        return userService.list();
    }
}
