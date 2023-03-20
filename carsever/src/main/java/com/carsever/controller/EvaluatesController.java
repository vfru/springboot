package com.carsever.controller;


import com.carsever.pojo.Evaluates;
import com.carsever.service.IEvaluatesService;
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
@RequestMapping("/evaluates")
public class EvaluatesController {

    @Autowired
    private IEvaluatesService evaluatesService;

    @GetMapping
    public WebResult getAllEvaluates() {
        List<Evaluates> list = evaluatesService.list();
        return WebResult.success(list);
    }

    //新增
    @PostMapping
    public WebResult AddEvaluates(@RequestBody Evaluates evaluates) {
        boolean save = evaluatesService.save(evaluates);
        return save ? WebResult.success() : WebResult.fail();
    }

    //修改
    @PatchMapping("/{id}")
    public WebResult UpdateEvaluates(@PathVariable Integer id, @RequestBody Evaluates evaluates) {
        if (evaluates.getId() == id) {
            boolean update = evaluatesService.updateById(evaluates);
            return update? WebResult.success():WebResult.fail();
        } else {
            return WebResult.fail();
        }
    }

    //删除
    @DeleteMapping("/{id}")
    public WebResult DeleteEvaluates(@PathVariable Integer id) {
        boolean remove = evaluatesService.removeById(id);
        return remove ? WebResult.success() : WebResult.success();
    }

    //得到评价以及汽车的信息
    @GetMapping("/car")
    public WebResult GetEvalutesAndcar() {
        List<Evaluates> list = evaluatesService.getEvaluatesAndCar();
        return WebResult.success(list);
    }


}

