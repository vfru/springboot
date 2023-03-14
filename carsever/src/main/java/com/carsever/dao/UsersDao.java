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

    //多表联查,查找用户的角色名称和
    @Select("SELECT  users.id,users.username,users.password,users.roleId,users.name,users.phone,users.block,roles.roleName,roles.roleType " +
            "FROM users users,roles roles " +
            "WHERE users.id=#{id} and users.roleId=roles.id")
    Users getUser(Integer id);

    //多表联查
    @Select("SELECT  users.id,users.username,users.password,users.roleId,users.name,users.phone,users.block,roles.roleName,roles.roleType " +
            "FROM users users,roles roles " +
            "WHERE users.roleId=roles.id")
    List<Users> getAllUser();

}
