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


    public List<Car_Carbrand> getAllCarIncludeCarBrand();

}
