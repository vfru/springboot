package com.carsystem.controller;

import com.carsystem.pojo.User;
import com.carsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class IndexController {
    @Autowired
    private UserService userService;

    @RequestMapping("/{id}")
    public String getByid(@PathVariable Integer id) {
        System.out.println(id);
        return "hello" + id;
    }

    @RequestMapping("/users")
    public List<User> list() {
        return userService.list();
    }


}
