package com.carsever.service;

import com.carsever.pojo.Evaluates;
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
public interface IEvaluatesService extends IService<Evaluates> {

    List<Evaluates> getEvaluatesAndCar();

}
