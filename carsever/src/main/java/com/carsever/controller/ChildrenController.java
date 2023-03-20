package com.carsever.controller;


import com.carsever.pojo.Children;
import com.carsever.service.impl.ChildrenServiceImpl;
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
@RequestMapping("/children")
public class ChildrenController {
    @Autowired
    ChildrenServiceImpl childrenService;

    @GetMapping
    public WebResult GetChildrenList(){
        List<Children> list = childrenService.GetChildrenList();
        return WebResult.success(list);
    }
}

