package com.carsever.dao;

import com.carsever.pojo.HistoryOrders_Car_Evaluate;
import com.carsever.pojo.Historyorders;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import org.apache.ibatis.annotations.Mapper;


import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Mapper
public interface HistoryordersDao extends BaseMapper<Historyorders> {


    //多表联查

    List<HistoryOrders_Car_Evaluate> getHisOrderList();


}
