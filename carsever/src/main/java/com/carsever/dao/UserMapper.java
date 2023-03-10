package com.carsever.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import com.carsever.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
//Mapper生成具有该注释的接口的动态代理类，并将其注入到spring容器中
//extends BaseMapper<> 继承BaseMapper类自动生成基本的操作
public interface UserMapper extends BaseMapper<User> {
}
