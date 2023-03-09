package com.carsystem.controller;

import com.carsystem.pojo.User;
import com.carsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class IndexController {
    @Autowired
    private UserService userService;



    @GetMapping("/list")
    public List<User> list(){
        return userService.list();
    }


}
