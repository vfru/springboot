package com.carsever.dao;

import com.carsever.pojo.Car_Carbrand;
import com.carsever.pojo.Cars;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.PathVariable;

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

    //得到所有汽车以及车牌信息的列表
    public List<Car_Carbrand> getAllCarIncludeCarBrand();

    //得到不同状态汽车的列表
    @Select("SELECT * FROM cars c WHERE c.state=#{state} ")
    public List<Cars> getCarListByState(@PathVariable Integer state);


}
