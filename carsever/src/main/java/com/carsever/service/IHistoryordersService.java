package com.carsever.service;

import com.carsever.pojo.HistoryOrdersCarEvaluate;
import com.carsever.pojo.Historyorders;
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
public interface IHistoryordersService extends IService<Historyorders> {

    List<HistoryOrdersCarEvaluate> gethisOrder();


}

