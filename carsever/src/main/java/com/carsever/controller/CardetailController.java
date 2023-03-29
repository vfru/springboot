package com.carsever.controller;


import com.carsever.pojo.Cardetail;
import com.carsever.pojo.Cars;
import com.carsever.service.ICardetailService;
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
@RequestMapping("/cardetail")
public class CardetailController {
    @Autowired
    ICardetailService cardetailService;
    @Autowired
    ICarsService carsService;

    //新增默认的汽车详细信息
    @PostMapping
    public WebResult addNewCarDetail(@RequestBody Cardetail cardetail) {
        cardetailService.save(cardetail);
        boolean save = cardetailService.save(cardetail);
        return save == true ? WebResult.success("新增车辆详细成功") : WebResult.fail("新增车辆详细失败");
    }

    //修改汽车的详细信息
    @PatchMapping("/{id}")
    public WebResult UpdateCarDetailById(@PathVariable Integer id, @RequestBody Cardetail cardetail) {
        if (cardetail.getId() == id) {
            boolean update = cardetailService.updateById(cardetail);
            return update? WebResult.success(update,"成功修改车辆详细信息"):WebResult.fail("修改详细信息失败");
        } else {
            return WebResult.fail("选择的车辆id和数据的车辆id不一致");
        }
    }

    @GetMapping("/car/{id}")
    public WebResult getCarDetail_car(@PathVariable Integer id) {
        Cardetail car = cardetailService.getCarDetail_CarById(id);
        return WebResult.success(car);
    }


}

