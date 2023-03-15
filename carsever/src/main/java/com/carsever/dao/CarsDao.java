package com.carsever.dao;

import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
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
public interface CarsDao extends BaseMapper<Cars> {

    //多表联查,查找所有的用户以及用户当前的角色
    @Select("SELECT  cars.id,cars.carbrandId,cars.carname,cars.deposit,cars.price,cars.discounts,cars.adminId,cars.state,cars.img," +
            "carbrands.value,carbrands.label " +
            "FROM cars cars,carbrands carbrands " +
            "WHERE cars.carbrandId=carbrands.id")
    public List<Car_Carbrand> getAllCarIncludeCarBrand();

}
