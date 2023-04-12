package com.carsever.controller;


import com.carsever.dao.RolesDao;
import com.carsever.pojo.Role_right;
import com.carsever.pojo.Roles;
import com.carsever.service.IRoles_RightDaoService;
import com.carsever.service.impl.RolesServiceImpl;
import com.carsever.web.WebResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

        if (id == 0) return WebResult.fail("不能修改总管理员的权限");
        List<String> strings = roles_rightDaoService.GetRoleByNumber(id); //根据用户id得到ringht的权限列表
        List<String> rights = roles.getRights();//得到用户修改完成时的权限列表


        //String和rights的交集
        List intersectList = new ArrayList(Arrays.asList(new Object[strings.size()]));
        Collections.copy(intersectList, strings);
        intersectList.retainAll(rights);
        //System.out.println("交集"+intersectList);


        //String和rights的并集
        List unionList = new ArrayList(Arrays.asList(new Object[strings.size()]));
        Collections.copy(unionList, strings);
        unionList.addAll(rights);
        //System.out.println("并集"+unionList);

        //并集和交集的差集
        List diffList = new ArrayList(Arrays.asList(new Object[unionList.size()]));
        Collections.copy(diffList, unionList);
        diffList.removeAll(intersectList);
        //System.out.println("差集"+diffList);


        List<Role_right> list = roles_rightDaoService.GetDifferentRoleById(id);//根据得到角色表格的所有数据
        //System.out.println(list);
        //通过循环的到表格中每一条数据
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < unionList.size(); j++) {
                boolean equals = list.get(i).getKey().equals(unionList.get(j));//比较每一条数据与两个数组不同的元素的key值

                if (equals) {//对原来的值进行取反
                    if (list.get(i).getDeleted() == 0) {
                        list.get(i).setDeleted(1);
                    } else {
                        list.get(i).setDeleted(0);
                    }
                    roles_rightDaoService.UpdateRightListById(id, list.get(i));
                }
            }
        }
        //System.out.println(list);
        return WebResult.success( rights,"修改成功");
    }


}

