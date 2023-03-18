package com.carsever.service.impl;

import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
import com.carsever.dao.CarsDao;
import com.carsever.service.ICarsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class CarsServiceImpl extends ServiceImpl<CarsDao, Cars> implements ICarsService {

    @Autowired
    CarsDao carsDao;

    public List<Car_Carbrand> getAllCarIncludeCarBrand(){
        return carsDao.getAllCarIncludeCarBrand();
    }

    @Override
    public List<Cars> getCarListByState(Integer state) {
        return carsDao.getCarListByState(state);
    }
}
