package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class HistoryOrders_Car_Evaluate {

    //TODO HistoryOrders
    private Integer id;

    private String hisid;
    @TableField("carId")
    private Integer carId;
    @TableField("userId")
    private Integer userId;

    private String carname;

    private String username;

    private String phone;
    @TableField("orderState")
    private Integer orderState;

    private LocalDate startdate;

    private LocalDate endingdate;
    @TableField("totalDay")
    private Integer totalDay;
    @TableField("totalPrice")
    private Double totalPrice;

    private String insurancedate;
    @TableField("insurancedatePrice")
    private Double insurancedatePrice;
    @TableField("totalAllPrice")
    private Double totalAllPrice;

    private Integer deposit;
    @TableField("clientMessage")
    private String clientMessage;

    /**
     * descriptions
     */
    private String descriptions;

    private String other;
    @TableField("extraExpense")
    private Double extraExpense;

    //TODO Cars
    Cars cars;

    //TODO Evaluates
    Evaluates evaluates;
}
