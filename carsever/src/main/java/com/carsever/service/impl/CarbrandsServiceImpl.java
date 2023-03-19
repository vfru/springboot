package com.carsever.service.impl;

import com.carsever.pojo.Carbrands;
import com.carsever.dao.CarbrandsDao;
import com.carsever.service.ICarbrandsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class CarbrandsServiceImpl extends ServiceImpl<CarbrandsDao, Carbrands> implements ICarbrandsService {

    @Autowired
    CarbrandsDao carbrandsDao;

    @Override
    public Carbrands GetCarByCarBrands() {
        return carbrandsDao.GetCarByCarBrands();
    }
}
