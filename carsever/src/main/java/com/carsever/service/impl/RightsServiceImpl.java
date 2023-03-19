package com.carsever.service.impl;

import com.carsever.pojo.Children;
import com.carsever.pojo.Rights;
import com.carsever.dao.RightsDao;
import com.carsever.service.IRightsService;
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
 * @since 2023-03-14
 */
@Service
public class RightsServiceImpl extends ServiceImpl<RightsDao, Rights> implements IRightsService {

    @Autowired
    RightsDao rightsDao;
   public List<Rights> getSideMenuList(){

       List<Rights> sideMenuList = rightsDao.getSideMenuList();


       return sideMenuList;

    }

    @Override
    public List<Rights> GetRightsList() {
        return rightsDao.GetRightsList();
    }
}
