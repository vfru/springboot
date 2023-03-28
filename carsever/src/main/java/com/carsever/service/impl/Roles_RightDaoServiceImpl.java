package com.carsever.service.impl;

import com.carsever.dao.Roles_RightDao;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.carsever.pojo.Role_right;
import com.carsever.service.IRoles_RightDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class Roles_RightDaoServiceImpl extends ServiceImpl<Roles_RightDao, Role_right> implements IRoles_RightDaoService {
    @Autowired
    Roles_RightDao roles_rightDao;


    @Override
    public List<String> GetRole_0() {
        return roles_rightDao.GetRole_0();
    }

    @Override
    public List<String> GetRole_1() {
        return roles_rightDao.GetRole_1();
    }

    @Override
    public List<String> GetRole_2() {
        return roles_rightDao.GetRole_2();
    }

    @Override
    public List<String> GetRole_3() {
        return roles_rightDao.GetRole_3();
    }

    //根据用户角色的id得到对应的rights权限
    public List<String> GetRoleByNumber(int num) {
        switch (num) {
            case 0:
                return GetRole_0();
            case 1:
                return GetRole_1();
            case 2:
                return GetRole_2();
            case 3:
                return GetRole_3();
            default:
                return null;
        }
    }




    @Override
    public List<Role_right> GetAllRight() {
        return roles_rightDao.GetAllRight();
    }

    @Override
    public List<Role_right> GetRole1All() {
        return roles_rightDao.GetRole1All();
    }

    @Override
    public List<Role_right> GetRole2All() {
        return roles_rightDao.GetRole2All();
    }

    @Override
    public List<Role_right> GetRole3All() {
        return roles_rightDao.GetRole3All();
    }


    //根据用户角色的id得到对应的权限表格的所有信息
    @Override
    public List<Role_right> GetDifferentRoleById(Integer id) {
        switch (id) {
            case 0:
                return GetAllRight();
            case 1:
                return GetRole1All();
            case 2:
                return GetRole2All();
            case 3:
                return GetRole3All();
            default:
                return null;
        }
    }

    @Override
    public boolean UpdateRight_1List(Role_right role_right) {
        return roles_rightDao.UpdateRight_1List(role_right);
    }

    @Override
    public boolean UpdateRight_2List(Role_right role_right) {
        return roles_rightDao.UpdateRight_2List(role_right);
    }

    @Override
    public boolean UpdateRight_3List(Role_right role_right) {
        return roles_rightDao.UpdateRight_3List(role_right);
    }

    //根据用户角色的id去更新对应的表格
    @Override
    public boolean UpdateRightListById(Integer id, Role_right role_right) {
        switch (id) {

            case 1:
                return UpdateRight_1List(role_right);
            case 2:
                return UpdateRight_2List(role_right);
            case 3:
                return UpdateRight_3List(role_right);
            default:
                return false;
        }
    }


}
