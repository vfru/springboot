package com.carsever.dao;

import com.carsever.pojo.HistoryOrdersCarEvaluate;
import com.carsever.pojo.Historyorders;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Mapper
public interface HistoryordersDao extends BaseMapper<Historyorders> {

    List<HistoryOrdersCarEvaluate> gethisOrder();

    @Select("SELECT * FROM historyorders h WHERE h.orderState=#{orderState}")
    List<Historyorders> GetFinishHisOrders(Integer orderState);

}
