package com.carsever;

import com.carsever.dao.CarMapper;
import com.carsever.dao.UserMapper;
import com.carsever.domain.Car;
import com.carsever.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class CarseverApplicationTests {

    @Autowired
    UserMapper userMapper;
    @Autowired
    CarMapper carMapper;

    @Test
    void contextLoads() {
    }

    @Test
    void getUserAll(){
        List<User> users = userMapper.selectList(null);
        System.out.println(users);
    }

    @Test
    void getCarById(){
        Car car = carMapper.selectById(1);
        System.out.println(car);
    }

}
