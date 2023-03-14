package com.carsever.controller;


import com.carsever.pojo.Roles;
import com.carsever.service.IRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author carSystem
 * @since 2023-03-12
 */
@RestController
@RequestMapping("/roles")
public class RolesController {

    @Autowired
    private IRolesService rolesService;

    @GetMapping
    public List<Roles> getRoles(){
        return rolesService.list();
    }
}

