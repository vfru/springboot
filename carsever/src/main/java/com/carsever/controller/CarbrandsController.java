package com.carsever.controller;


import com.carsever.pojo.Carbrands;
import com.carsever.service.impl.CarbrandsServiceImpl;
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
@RequestMapping("/carbrands")
public class CarbrandsController {

    @Autowired
    CarbrandsServiceImpl carbrandsService;

    @GetMapping("/cars")
    public WebResult GetCarByCarBrands(){
        Carbrands carbrands = carbrandsService.GetCarByCarBrands();
        return WebResult.success(carbrands);
    }

    @GetMapping
    public WebResult GetCarBrandsList(){
        List<Carbrands> list = carbrandsService.list();
        return WebResult.success(list);
    }

}

