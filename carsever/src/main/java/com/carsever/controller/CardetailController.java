package com.carsever.controller;


import com.carsever.pojo.Cardetail;
import com.carsever.service.ICardetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
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
    public boolean addNewCarDetail(@RequestBody Cardetail cardetail){
        return cardetailService.save(cardetail);
    }

    //修改汽车的详细信息
    @PatchMapping("/{id}")
    public boolean UpdateCarDetailById(@PathVariable Integer id , @RequestBody Cardetail cardetail){
        if (cardetail.getId()==id){
            return cardetailService.updateById(cardetail);
        }else {
            return false;
        }
    }


}

