package com.carsever.controller;


import com.carsever.pojo.HistoryOrdersCarEvaluate;
import com.carsever.pojo.Historyorders;
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

    @GetMapping("/car/evaluate")
    public List<HistoryOrdersCarEvaluate> getHistoryOrders() {
       return historyordersService.gethisOrder();
    }

    @GetMapping("/{id}")
    public Historyorders getHistoryOrdersById(@PathVariable Integer id){
        return historyordersService.getById(id);
    }


    @PatchMapping("/{id}")
    public boolean Update(@PathVariable Integer id, @RequestBody Historyorders historyorders) {

        if (historyorders.getId() == id) {
            return historyordersService.updateById(historyorders);
        } else {
            return false;
        }

    }

    @GetMapping("/orderState/{orderState}")
    public List<Historyorders> GetFinishHisOrders(@PathVariable Integer orderState){
        return historyordersService.GetFinishHisOrders(orderState);
    }

}

