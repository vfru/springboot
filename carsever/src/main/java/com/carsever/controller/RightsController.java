package com.carsever.controller;


import com.carsever.pojo.Rights;
import com.carsever.pojo.Role_right;
import com.carsever.service.impl.RightsServiceImpl;
import com.carsever.service.impl.Roles_RightDaoServiceImpl;
import com.carsever.web.WebResult;
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
@RequestMapping("/rights")
public class RightsController {
    @Autowired
    RightsServiceImpl rightsService;

    @Autowired
    Roles_RightDaoServiceImpl roles_rightDaoService;

    @GetMapping
    public WebResult GetRightsList(){
        List<Rights> list = rightsService.GetRightsList();
        return WebResult.success(list);
    }

    @GetMapping("/children")
    public WebResult GetSideMenuList(){
        List<Rights> list = rightsService.getSideMenuList();
        return WebResult.success(list);
    }
    @GetMapping("/children/all")
    public WebResult GetRouterList(){
        List<Role_right> list = roles_rightDaoService.GetAllRight();
        return WebResult.success(list);
    }

}

