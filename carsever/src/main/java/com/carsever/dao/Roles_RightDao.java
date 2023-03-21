package com.carsever.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.carsever.pojo.Role_right;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface Roles_RightDao extends BaseMapper<Role_right> {


    @Select("SELECT * FROM role_0 r0")
    List<Role_right> GetRole_0();

    @Select("SELECT * FROM role_1 r1 WHERE deleted = 0")
    List<Role_right> GetRole_1();

    @Select("SELECT * FROM role_2 r2 WHERE deleted = 0")
    List<Role_right> GetRole_2();

    @Select("SELECT * FROM role_3 r3 WHERE deleted = 0")
    List<Role_right> GetRole_3();
}
