package com.carsever.service;

import com.carsever.pojo.Role_right;
import com.baomidou.mybatisplus.extension.service.IService;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface IRoles_RightDaoService extends IService<Role_right> {

    List<String> GetRole_0();

    List<String> GetRole_1();

    List<String> GetRole_2();

    List<String> GetRole_3();

    List<String> GetRoleByNumber(int num);



    List<Role_right> GetAllRight();


    List<Role_right> GetRole1All();


    List<Role_right> GetRole2All();


    List<Role_right> GetRole3All();


    List<Role_right> GetDifferentRoleById(Integer id);


    boolean UpdateRightList(Role_right role_right);

}
