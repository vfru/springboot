package com.carsever.service;

import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface ICarsService extends IService<Cars> {
    public List<Car_Carbrand> getAllCarIncludeCarBrand();

}
