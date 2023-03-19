package com.carsever.service.impl;

import com.carsever.pojo.Children;
import com.carsever.dao.ChildrenDao;
import com.carsever.service.IChildrenService;
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
public class ChildrenServiceImpl extends ServiceImpl<ChildrenDao, Children> implements IChildrenService {
    @Autowired
    ChildrenDao childrenDao;

    public List<Children> GetChildrenList() {
        return childrenDao.GetChildrenList();
    }
}
