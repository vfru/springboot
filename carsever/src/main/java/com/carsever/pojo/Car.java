package com.carsever.pojo;

import lombok.Data;

@Data
public class Car {

    private Integer id;
    private Integer carbrandid;
    private String carname;
    private int deposit;
    private double price;
    private double discounts;
    private Integer userId;
    private int state;
    private String img;


}
