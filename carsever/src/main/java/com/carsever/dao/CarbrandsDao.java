package com.carsever.dao;

import com.carsever.pojo.Carbrands;
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
public interface CarbrandsDao extends BaseMapper<Carbrands> {

    List<Carbrands> GetCarByCarBrands();

}
