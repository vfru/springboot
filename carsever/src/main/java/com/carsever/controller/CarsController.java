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
            return update ? WebResult.success("成功修改车辆详细") : WebResult.fail("修改失败");
        } else {
            return WebResult.fail("选择的车辆id和修改的车辆id不一致");
        }

    }

    //新增汽车
    @PostMapping
    public WebResult addNewCar(@RequestBody Cars cars) {
        //新增汽车
        boolean save = carsService.save(cars);
        //通过与全部汽车比较汽车名称和价格得到新增的汽车
        List<Cars> list = carsService.lambdaQuery()
                .eq(Cars::getCarname, cars.getCarname())
                .eq(Cars::getPrice, cars.getPrice()).list();

        //得到新增的汽车的全部信息,主要是为了得到新增车辆的id
        Cars cars1 = list.get(0);
        Integer id = cars1.getId();
        System.out.println(id);

        //把车辆信息发生给前端,前端再根据车辆id创建默认好的车辆详细信息,创建新车同时创建新的详细信息
        return save == true ? WebResult.success(cars1) : WebResult.fail("新增车辆失败");
    }

    //得到不同状态的汽车列表
    @GetMapping("/state/{id}")
    public WebResult GetCarListByState(@PathVariable Integer id) {
        if (id == 1 || id == 2) {
            List<Cars> list = carsService.getCarListByState(id);
            return WebResult.success(list);

        }
        return WebResult.fail("目前只支持得到出租中和优惠中的车辆");
    }


}

