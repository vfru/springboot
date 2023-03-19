package com.carsever;


import com.carsever.pojo.Evaluates;
import com.carsever.pojo.Users;
import com.carsever.service.impl.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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

}
