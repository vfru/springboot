package com.carsever.service.impl;

import com.carsever.pojo.Cardetail;
import com.carsever.dao.CardetailDao;
import com.carsever.service.ICardetailService;
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
public class CardetailServiceImpl extends ServiceImpl<CardetailDao, Cardetail> implements ICardetailService {

    @Autowired
    CardetailDao cardetailDao;

    @Override
    public Cardetail getCarDetail_CarById(Integer id) {
        return cardetailDao.getCarDetail_CarById(id);
    }
}
