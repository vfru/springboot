package com.carsystem.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//lombok自动生成get,set,有参无参构造方法
public class Car {
    private Integer id;
    private Integer carbrandId;
    private String  carname;
    private double deposit;
    private double price;
    private double discounts;
    private Integer userId;
    private Integer state;
    private String img;
}
