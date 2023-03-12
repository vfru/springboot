package com.carsever.dao;

import com.carsever.pojo.Users;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author carSystem
 * @since 2023-03-12
 */
@Mapper
public interface UsersDao extends BaseMapper<Users> {

}
