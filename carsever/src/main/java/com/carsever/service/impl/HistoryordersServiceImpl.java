package com.carsever.service.impl;

import com.carsever.pojo.HistoryOrdersCarEvaluate;
import com.carsever.pojo.Historyorders;
import com.carsever.dao.HistoryordersDao;
import com.carsever.service.IHistoryordersService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class HistoryordersServiceImpl extends ServiceImpl<HistoryordersDao, Historyorders> implements IHistoryordersService {

    @Autowired
    HistoryordersDao historyordersDao;


    @Override
    public List<HistoryOrdersCarEvaluate> gethisOrder() {
        return historyordersDao.gethisOrder();
    }

    //得到完成状态的订单列表
    @Override
    public List<Historyorders> GetFinishHisOrders(Integer orderState) {

        if (orderState != 3) return null;

        return historyordersDao.GetFinishHisOrders(orderState);
    }


}
