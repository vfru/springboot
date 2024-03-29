package com.carsever.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.carsever.pojo.Role_right;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface Roles_RightDao extends BaseMapper<Role_right> {

    //得到key这一列的数据
    @Select("SELECT r0.key FROM role_0 r0  ")
    List<String> GetRole_0();

    @Select("SELECT r1.key FROM role_1 r1 WHERE deleted = 0")
    List<String> GetRole_1();

    @Select("SELECT r2.key FROM role_2 r2 WHERE deleted = 0")
    List<String> GetRole_2();

    @Select("SELECT r3.key FROM role_3 r3 WHERE deleted = 0")
    List<String> GetRole_3();

    //得到对应表格的全部数据
    @Select("SELECT * FROM role_0 r0")
    List<Role_right> GetAllRight();

    @Select("SELECT * FROM role_1 r1")
    List<Role_right> GetRole1All();

    @Select("SELECT * FROM role_2 r2")
    List<Role_right> GetRole2All();

    @Select("SELECT * FROM role_3 r3")
    List<Role_right> GetRole3All();


    //更新方法
    boolean UpdateRight_1List(Role_right role_right);

    boolean UpdateRight_2List(Role_right role_right);

    boolean UpdateRight_3List(Role_right role_right);


}
