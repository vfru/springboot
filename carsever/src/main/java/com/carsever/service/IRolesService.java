package com.carsever.service;

import com.carsever.pojo.Roles;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
public interface IRolesService extends IService<Roles> {
    public List<String> getRightByRoleId(@PathVariable Integer id);

    public List<Integer> getKeyId (List<String> keylist );


}
