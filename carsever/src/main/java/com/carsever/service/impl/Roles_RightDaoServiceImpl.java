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
    public List<Role_right> GetRole_0() {
        return roles_rightDao.GetRole_0();
    }

    @Override
    public List<Role_right> GetRole_1() {
        return roles_rightDao.GetRole_1();
    }

    @Override
    public List<Role_right> GetRole_2() {
        return roles_rightDao.GetRole_2();
    }

    @Override
    public List<Role_right> GetRole_3() {
        return roles_rightDao.GetRole_3();
    }

    public List<Role_right> GetRoleByNumber(int num) {
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
}
