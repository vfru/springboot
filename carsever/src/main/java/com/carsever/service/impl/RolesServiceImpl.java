package com.carsever.service.impl;

import com.carsever.pojo.Roles;
import com.carsever.dao.RolesDao;
import com.carsever.service.IRolesService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Service
public class RolesServiceImpl extends ServiceImpl<RolesDao, Roles> implements IRolesService {

    @Autowired
    RolesDao rolesDao;

    //根据角色的id获得对应的key权限数列
    @Override
    public List<String> getRightByRoleId(Integer id) {
        List<String> list = rolesDao.getRightByRoleId(id);

        return list;
    }

    //根据修改后权限数列中的key值,去查询表格得到每个key对应的id
    @Override
    public List<Integer> getKeyId(List<String> keylist) {

        //新建list用来存放,每个key对应的id
        List<Integer> list = new ArrayList<>();

        //通过循环实现查询每一个key的id,并添加进list中
        for (int i = 0; i < keylist.size(); i++) {
            Integer keyId = rolesDao.getKeyId(keylist.get(i));
            list.add(keyId);
        }

        return list;
    }
    //删除当前角色的所有权限,根据修改后的权限数列重新新建

}
