package com.carsever.controller;


import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
import com.carsever.service.ICarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/cars")
public class CarsController {
    @Autowired
    ICarsService carsService;

    //得到全部的汽车数据
    @GetMapping
    public List<Cars> getCarsList(){
       return carsService.list();
    }

    //得到包含汽车品牌的所有汽车数据
    @GetMapping("/carbrand")
    public List<Car_Carbrand> getCars_BrandList(){
        return carsService.getAllCarIncludeCarBrand();
    }

    //修改汽车数据
    @PatchMapping("/{id}")
    public boolean UpdateCar(@PathVariable Integer id, @RequestBody Cars cars){

        if (cars.getId()==id){
            return carsService.updateById(cars);
        }else {
            return false;
        }

    }

    //新增汽车
    @PostMapping
    public boolean addNewCar(@RequestBody Cars cars){
        return carsService.save(cars);
    }


}

