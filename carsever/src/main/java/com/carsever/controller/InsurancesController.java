package com.carsever.controller;


import com.carsever.pojo.Insurances;
import com.carsever.service.impl.InsurancesServiceImpl;
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
@RequestMapping("/insurances")
public class InsurancesController {

    @Autowired
    InsurancesServiceImpl insurancesService;

    @GetMapping
    public List<Insurances> GetInsurancesList(){
        return insurancesService.list();
    }

}

