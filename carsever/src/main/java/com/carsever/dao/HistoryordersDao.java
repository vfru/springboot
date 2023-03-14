package com.carsever.dao;

import com.carsever.pojo.HistoryOrders_Car_Evaluate;
import com.carsever.pojo.Historyorders;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

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
    @Select("SELECT  historyorders.id,historyorders.hisid,historyorders.carId,historyorders.userId,historyorders.carname,historyorders.username,historyorders.phone,historyorders.orderState,historyorders.startdate,historyorders.endingdate,historyorders.totalDay,historyorders.totalPrice,historyorders.insurancedate,historyorders.insurancedatePrice,historyorders.totalAllPrice,historyorders.deposit,historyorders.clientMessage,historyorders.descriptions,historyorders.other,historyorders.extraExpense," +
            "cars.carbrandId,cars.carname,cars.deposit,cars.price,cars.discounts,cars.userId,cars.state,cars.img," +
            "evaluates.id,evaluates.carId,evaluates.carname,evaluates.userId,evaluates.roleId,evaluates.author,evaluates.createTime,evaluates.content,evaluates.appraiseState,evaluates.star " +
            "FROM historyorders historyorders,cars cars,evaluates evaluates " +
            "WHERE historyorders.carId=cars.id and historyorders.id=evaluates.historyOrderId ")
    List<HistoryOrders_Car_Evaluate> getAllHistoryOrders();
    //多表联查
    @Select("SELECT  historyorders.id,historyorders.hisid,historyorders.carId,historyorders.userId,historyorders.carname,historyorders.username,historyorders.phone,historyorders.orderState,historyorders.startdate,historyorders.endingdate,historyorders.totalDay,historyorders.totalPrice,historyorders.insurancedate,historyorders.insurancedatePrice,historyorders.totalAllPrice,historyorders.deposit,historyorders.clientMessage,historyorders.descriptions,historyorders.other,historyorders.extraExpense," +
            "evaluates.id,evaluates.historyOrderId,evaluates.carId,evaluates.carname,evaluates.userId,evaluates.roleId,evaluates.author,evaluates.createTime,evaluates.content,evaluates.appraiseState,evaluates.star " +
            "FROM historyorders historyorders,evaluates evaluates " +
            "WHERE  historyorders.id=evaluates.historyOrderId ")
    List<HistoryOrders_Car_Evaluate> getAllHistoryOrdersEvaluates();
}
