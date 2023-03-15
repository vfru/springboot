package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.TableField;

public class Car_Carbrand {

    //TODO Car
    private Integer id;
    @TableField("carbrandId")
    private Integer carbrandId;

    private String carname;

    private Integer deposit;

    private Double price;

    private Double discounts;
    @TableField("adminId")
    private Integer adminId;

    private Integer state;

    private String img;

    //TODO CarBrand
    private String value;

    private String label;

}
