package com.carsever.dao;

import com.carsever.pojo.Roles;
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
public interface RolesDao extends BaseMapper<Roles> {
   //根据角色的id获得对应的key权限数列
   public List<String> getRightByRoleId(@PathVariable Integer id);

   //根据修改后的key权限数列去获得每一个元素对应的id
   @Select("SELECT role_0.id FROM role_0 WHERE role_0.`key`= #{key}")
   public Integer getKeyId(String key);

}
