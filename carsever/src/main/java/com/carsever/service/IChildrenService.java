package com.carsever.service;

import com.carsever.pojo.Children;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface IChildrenService extends IService<Children> {
    public List<Children> GetChildrenList();

}
