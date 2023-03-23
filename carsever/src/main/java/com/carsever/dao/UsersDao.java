package com.carsever.dao;

import com.carsever.pojo.Users;
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
 * @since 2023-03-12
 */
@Mapper
public interface UsersDao extends BaseMapper<Users> {

    //多表联查,根据id查找用户以及用户的角色
    @Select("SELECT * FROM users users WHERE users.roleId=#{id} ")
    List<Users> getUserByRolesId(Integer id);


    List<Users> getAllUser();

}
