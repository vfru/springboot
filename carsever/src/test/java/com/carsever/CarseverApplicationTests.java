package com.carsever;


import com.carsever.dao.RolesDao;
import com.carsever.pojo.Rights_role;
import com.carsever.service.impl.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Map;

@SpringBootTest
class CarseverApplicationTests {




    @Test
    void contextLoads() {
    }

    @Autowired
    UsersServiceImpl usersService;

    @Test
    public void getAllUserRole(){
        System.out.println(usersService.getAllUser());
    }

    @Autowired
    HistoryordersServiceImpl historyordersService;

    @Test
    public void HisListTest(){
        System.out.println(historyordersService.gethisOrder());
    }

    @Autowired
    RightsServiceImpl rightsService;
//    @Test
//    public void getRightTest(){
//        System.out.println(rightsService.getSideMenuList());
//    }

    @Autowired
    EvaluatesServiceImpl evaluatesService;
    @Test
    public void getEvaCarTest(){
        System.out.println(evaluatesService.getEvaluatesAndCar());
    }

    @Autowired
    CardetailServiceImpl cardetailService;
    @Test
    public void getCarDetailTest(){
        System.out.println(cardetailService.getCarDetail_CarById(1));
    }

    @Autowired
    ChildrenServiceImpl childrenService;
    @Test
    public void GetChildTest(){
        System.out.println(childrenService.GetChildrenList());
    }

    @Test
    public void TestR(){
        System.out.println(rightsService.GetRightsList());
    }

    @Autowired
    Roles_RightDaoServiceImpl roles_rightDaoService;
    @Test
    public void update(){
//        Role_right role_right = new Role_right();
//        role_right.setDeleted(1);
//        role_right.setKey("/role/list");
//        roles_rightDaoService.UpdateRightList(role_right);

    }

    @Autowired
    Rights_roleServiceImpl rights_roleService;
    @Test
    public void delete(){
        Map<String,Object> map = new HashMap<>();
        map.put("roleId",3);//删除角色为顾客的所有权限
        rights_roleService.removeByMap(map);
    }

    @Test
    public void add(){
        Rights_role rightsRole = new Rights_role();
        rightsRole.setRoleId(3);
        rightsRole.setRole_0Id(1);
        rights_roleService.save(rightsRole);
    }

    @Autowired
    RolesDao rolesDao;
    @Test
    public void getKeyId(){
        Integer id = rolesDao.getKeyId("/appraise");
        System.out.println(id);
    }


}
