package com.carsever.controller;


import com.carsever.pojo.Cardetail;
import com.carsever.service.ICardetailService;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    //新增默认的汽车详细信息
    @PostMapping
    public WebResult addNewCarDetail(@RequestBody Cardetail cardetail) {
        boolean save = cardetailService.save(cardetail);
        return save == true ? WebResult.success() : WebResult.fail();
    }

    //修改汽车的详细信息
    @PatchMapping("/{id}")
    public WebResult UpdateCarDetailById(@PathVariable Integer id, @RequestBody Cardetail cardetail) {
        if (cardetail.getId() == id) {
            boolean update = cardetailService.updateById(cardetail);
            return update? WebResult.success(update):WebResult.fail();
        } else {
            return WebResult.fail();
        }
    }

    @GetMapping("/car/{id}")
    public WebResult getCarDetail_car(@PathVariable Integer id) {
        Cardetail car = cardetailService.getCarDetail_CarById(id);
        return WebResult.success(car);
    }


}

