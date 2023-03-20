package com.carsever.controller;


import com.carsever.pojo.Swiper;
import com.carsever.service.impl.SwiperServiceImpl;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

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
@RequestMapping("/swiper")
public class SwiperController {

    @Autowired
    SwiperServiceImpl swiperService;

    @GetMapping
    public WebResult getSwiper(){
        List<Swiper> list = swiperService.list();
        return WebResult.success(list);
    }
}

