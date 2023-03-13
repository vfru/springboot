package com.carsever;


import com.carsever.service.impl.BlogServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CarseverApplicationTests {

    @Autowired
    BlogServiceImpl blogService;

    @Test
    void contextLoads() {
    }





}
