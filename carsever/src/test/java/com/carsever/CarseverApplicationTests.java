package com.carsever;


import com.carsever.pojo.Users;
import com.carsever.service.impl.HistoryordersServiceImpl;
import com.carsever.service.impl.UsersServiceImpl;
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
    public void getAllHistryorderTest(){
        System.out.println(historyordersService.getAllHistoryOrders());
    }





}
