package com.carsever.controller;


import com.carsever.dao.RolesDao;
import com.carsever.pojo.Roles;
import com.carsever.service.impl.RolesServiceImpl;
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
 * @since 2023-03-14
 */
@RestController
@RequestMapping("/roles")
public class RolesController {
    @Autowired
    RolesServiceImpl rolesService;

    @GetMapping
    public List<Roles> GetRolesList(){
        return rolesService.list();
    }

}

