package com.carsever.controller;


import com.carsever.pojo.HistoryOrdersCarEvaluate;
import com.carsever.pojo.Historyorders;
import com.carsever.service.IHistoryordersService;
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
@RequestMapping("/historyorders")
public class HistoryordersController {

    @Autowired
    private IHistoryordersService historyordersService;

    @GetMapping("/car/evaluate")
    public WebResult getHistoryOrders() {
        List<HistoryOrdersCarEvaluate> list = historyordersService.gethisOrder();
        return WebResult.success(list);
    }

    @GetMapping("/{id}")
    public WebResult getHistoryOrdersById(@PathVariable Integer id) {
        Historyorders historyorders = historyordersService.getById(id);
        return WebResult.success(historyorders);
    }


    @PatchMapping("/{id}")
    public WebResult Update(@PathVariable Integer id, @RequestBody Historyorders historyorders) {

        if (historyorders.getId() == id) {
            boolean update = historyordersService.updateById(historyorders);
            return update ? WebResult.success() : WebResult.fail();
        } else {
            return WebResult.fail();
        }
    }

    //新增订单
    @PostMapping
    public WebResult AddNewHisOrders(@RequestBody Historyorders historyorders) {
        boolean save = historyordersService.save(historyorders);
        return save ? WebResult.success() : WebResult.fail();
    }

    @GetMapping("/orderstate/{id}")
    public WebResult GetFinishHisOrders(@PathVariable Integer id) {
        List<Historyorders> list = historyordersService.GetFinishHisOrders(id);
        return WebResult.success(list);
    }

}

