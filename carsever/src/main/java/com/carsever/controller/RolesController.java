package com.carsever.controller;


import com.carsever.dao.RolesDao;
import com.carsever.pojo.Role_right;
import com.carsever.pojo.Roles;
import com.carsever.service.IRoles_RightDaoService;
import com.carsever.service.impl.RolesServiceImpl;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@RestController
@RequestMapping("/roles")
public class RolesController {
    @Autowired
    RolesServiceImpl rolesService;
    @Autowired
    private IRoles_RightDaoService roles_rightDaoService;

    @GetMapping
    public WebResult GetRolesList() {
        List<Roles> list = rolesService.list();

        for (int i = 0; i < list.size(); i++) {
            List<String> strings = roles_rightDaoService.GetRoleByNumber(list.get(i).getId());
            list.get(i).setRights(strings);
        }

        return WebResult.success(list);
    }

    @GetMapping("/{id}")
    public WebResult GetRoleById(@PathVariable Integer id) {
        Roles role = rolesService.getById(id);
        return WebResult.success(role);
    }

    @PatchMapping("/{id}")
    public WebResult UpdateRoleRightsById(@PathVariable Integer id, @RequestBody Roles roles) {
        List<String> strings = roles_rightDaoService.GetRoleByNumber(id);
        List<String> rights = roles.getRights();
        Map<String, Integer> map = new HashMap<String, Integer>();
        List<String> longList = rights;
        List<String> shortList = strings;
        if (strings.size() > rights.size()) {
            longList = strings;
            shortList = rights;
        }
        for (String string : shortList) {//将shortList放到map中，map的value任意数字即可
            map.put(string, 0);
        }
        shortList.clear();//清空shortList，用于存放longList中有map中没有的数据
        Integer in;
        for (String string : longList) {
            in = map.get(string);
            if (null == in) {
                shortList.add(string);//longList中有map中没有的数据
            }
        }
        List<Role_right> list = roles_rightDaoService.GetDifferentRoleById(id);
        System.out.println(list);
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < shortList.size(); j++) {
                boolean equals = list.get(i).getKey().equals(shortList.get(j));
                if (equals){
                    list.get(i).setDeleted(0);

                }
            }
        }
        System.out.println(list);
        return WebResult.success(shortList);
    }



}

