package com.carsever.dao;

import com.carsever.pojo.Historyorders;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.carsever.pojo.Users;
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
public interface HistoryordersDao extends BaseMapper<Historyorders> {
    //多表联查
    @Select("SELECT  users.id,users.username,users.password,users.roleId,users.name,users.phone,users.block,roles.roleName,roles.roleType " +
            "FROM users users,roles roles " +
            "WHERE users.roleId=roles.id")
    List<Users> getAllUser();
}
