package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDate;
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
 * @since 2023-03-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Historyorders implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Integer id;

    private String hisid;

    private Integer carId;

    private Integer userId;

    private String carname;

    private String username;

    private String phone;

    private Integer orderState;

    private LocalDate startdate;

    private LocalDate endingdate;

    private Integer totalDay;

    private Double totalPrice;

    private String insurancedate;

    private Double insurancedatePrice;

    private Double totalAllPrice;

    private Integer deposit;

    private String clientMessage;

    /**
     * descriptions
     */
    private String descriptions;

    private String other;

    private Double extraExpense;


}
