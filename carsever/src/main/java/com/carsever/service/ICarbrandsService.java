package com.carsever.service;

import com.carsever.pojo.Carbrands;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface ICarbrandsService extends IService<Carbrands> {

    Carbrands GetCarByCarBrands();

}
