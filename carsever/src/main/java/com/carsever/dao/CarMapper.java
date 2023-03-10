package com.carsever.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.carsever.domain.Car;
import org.apache.ibatis.annotations.Mapper;

@Mapper
//Mapper生成具有该注释的接口的动态代理类，并将其注入到spring容器中
//extends BaseMapper<> 继承BaseMapper类自动生成数据库的增删改查基本的操作
public interface CarMapper extends BaseMapper<Car> {
}
