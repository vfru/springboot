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

    List<Role_right> GetRole_0();

    List<Role_right> GetRole_1();

    List<Role_right> GetRole_2();

    List<Role_right> GetRole_3();

    List<Role_right> GetRoleByNumber(int num);
}
