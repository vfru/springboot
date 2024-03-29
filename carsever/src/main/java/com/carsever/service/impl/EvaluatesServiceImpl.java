package com.carsever.service.impl;

import com.carsever.pojo.Evaluates;
import com.carsever.dao.EvaluatesDao;
import com.carsever.service.IEvaluatesService;
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
public class EvaluatesServiceImpl extends ServiceImpl<EvaluatesDao, Evaluates> implements IEvaluatesService {

    @Autowired EvaluatesDao evaluatesDao;

    @Override
    public List<Evaluates> getEvaluatesAndCar() {
        return evaluatesDao.getEvaluatesAndCar();
    }
}
