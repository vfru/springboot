package com.carsever.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//lombok自动生成get,set,有参无参构造方法
public class Car {
    private Integer id;
    private Integer carbrandid;
    private String  carname;
    private double deposit;
    private double price;
    private double discounts;
    private Integer userid;
    private Integer state;
    private String img;
}
