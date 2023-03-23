package com.carsever.service;

import com.carsever.pojo.Users;
import com.baomidou.mybatisplus.extension.service.IService;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-12
 */
public interface IUsersService extends IService<Users> {

     List<Users> getUserByRolesId(Integer id);

     List<Users> getAllUser();

}
