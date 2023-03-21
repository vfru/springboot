package com.carsever.controller;


import com.carsever.dao.RolesDao;
import com.carsever.pojo.Roles;
import com.carsever.service.impl.RolesServiceImpl;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public WebResult GetRolesList(){
        List<Roles> list = rolesService.list();
        return WebResult.success(list);
    }
    @GetMapping("/{id}")
    public WebResult GetRoleById(@PathVariable Integer id){
        Roles role = rolesService.getById(id);
        return WebResult.success(role);
    }


}

