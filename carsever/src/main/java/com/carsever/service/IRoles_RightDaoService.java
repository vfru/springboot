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

    //得到key这一列的数据
    List<String> GetRole_0();

    List<String> GetRole_1();

    List<String> GetRole_2();

    List<String> GetRole_3();

    List<String> GetRoleByNumber(int num);


    //得到对应表格的全部数据
    List<Role_right> GetAllRight();


    List<Role_right> GetRole1All();


    List<Role_right> GetRole2All();


    List<Role_right> GetRole3All();


    List<Role_right> GetDifferentRoleById(Integer id);


    //更新方法
    boolean UpdateRight_1List(Role_right role_right);

    boolean UpdateRight_2List(Role_right role_right);

    boolean UpdateRight_3List(Role_right role_right);


    boolean UpdateRightListById(Integer id,Role_right role_right);

}
