package com.carsever.controller;


import com.carsever.pojo.HistoryOrders_Car_Evaluate;
import com.carsever.pojo.Historyorders;
import com.carsever.pojo.Users;
import com.carsever.service.IHistoryordersService;
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
@RequestMapping("/historyorders")
public class HistoryordersController {

    @Autowired
    private IHistoryordersService historyordersService;

//    @GetMapping("/car/evaluate")
//    public List<HistoryOrders_Car_Evaluate> getHistoryOrders() {
//        return historyordersService.getAllHistoryOrders();
//    }


    @PatchMapping("/{id}")
    public boolean Update(@PathVariable Integer id, @RequestBody Historyorders historyorders) {

        if (historyorders.getId() == id) {
            return historyordersService.updateById(historyorders);
        } else {
            return false;
        }

    }

}

