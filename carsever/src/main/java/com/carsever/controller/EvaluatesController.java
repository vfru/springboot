package com.carsever.controller;


import com.carsever.pojo.Evaluates;
import com.carsever.service.IEvaluatesService;
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
@RequestMapping("/evaluates")
public class EvaluatesController {

    @Autowired
    private IEvaluatesService evaluatesService;

    @GetMapping
    public List<Evaluates> getAllEvaluates(){
        return evaluatesService.list();
    }

}

