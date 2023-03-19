package com.carsever.controller;


import com.carsever.pojo.Rights;
import com.carsever.service.impl.RightsServiceImpl;
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

    @GetMapping
    public List<Rights> GetRightsList(){
        return rightsService.GetRightsList();
    }

//    @GetMapping("/children")
//    public List<Rights> GetSideMenuList(){
//        return rightsService.getSideMenuList();
//    }

}

