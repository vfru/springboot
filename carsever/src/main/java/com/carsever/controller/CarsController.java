package com.carsever.controller;


import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
import com.carsever.service.ICarsService;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@RestController
@RequestMapping("/cars")
public class CarsController {
    @Autowired
    ICarsService carsService;

    //得到全部的汽车数据
    @GetMapping
    public WebResult getCarsList() {
        List<Cars> list = carsService.list();
        return WebResult.success(list);
    }

    //得到包含汽车品牌的所有汽车数据
    @GetMapping("/carbrand")
    public WebResult getCars_BrandList() {
        List<Car_Carbrand> list = carsService.getAllCarIncludeCarBrand();
        return WebResult.success(list);
    }

    //修改汽车数据
    @PatchMapping("/{id}")
    public WebResult UpdateCar(@PathVariable Integer id, @RequestBody Cars cars) {
        System.out.println(cars);
        if (cars.getId() == id) {
            boolean update = carsService.updateById(cars);
            return update ? WebResult.success() : WebResult.fail();
        } else {
            return WebResult.fail();
        }

    }

    //新增汽车
    @PostMapping
    public WebResult addNewCar(@RequestBody Cars cars) {
        boolean save = carsService.save(cars);
        return save == true ? WebResult.success() : WebResult.fail();
    }

    //得到不同状态的汽车列表
    @GetMapping("/state/{id}")
    public WebResult GetCarListByState(@PathVariable Integer id) {
        if (id == 1 || id == 2) {
            List<Cars> list = carsService.getCarListByState(id);
            return WebResult.success(list);

        }
        return WebResult.fail();
    }


}

