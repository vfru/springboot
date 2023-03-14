package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDate;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author carSystem
 * @since 2023-03-14
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Historyorders implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.ASSIGN_ID)
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


}
