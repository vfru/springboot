package com.carsever.service.impl;

import com.carsever.pojo.Users;
import com.carsever.dao.UsersDao;
import com.carsever.service.IUsersService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-12
 */
@Service
public class UsersServiceImpl extends ServiceImpl<UsersDao, Users> implements IUsersService {

    @Autowired
    UsersDao usersDao;


    @Override
    public List<Users> getUserByRolesId(Integer id){
        //System.out.println(usersDao.getUser(id));
        return usersDao.getUserByRolesId(id);
    }

    @Override
    public List<Users> getAllUser() {
        return usersDao.getAllUser();
    }

}
