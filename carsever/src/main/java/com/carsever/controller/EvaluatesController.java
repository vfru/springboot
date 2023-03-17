package com.carsever.controller;


import com.carsever.pojo.Evaluates;
import com.carsever.service.IEvaluatesService;
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
@RequestMapping("/evaluates")
public class EvaluatesController {

    @Autowired
    private IEvaluatesService evaluatesService;

    @GetMapping
    public List<Evaluates> getAllEvaluates(){
        return evaluatesService.list();
    }

    //新增
    @PostMapping
    public boolean AddEvaluates(@RequestBody Evaluates evaluates ){
        return evaluatesService.save(evaluates);
    }

    //修改
    @PatchMapping("/{id}")
    public boolean UpdateEvaluates(@PathVariable Integer id,@RequestBody Evaluates evaluates){
        if (evaluates.getId()==id){
            return evaluatesService.updateById(evaluates);
        }else {
            return false;
        }
    }


}

