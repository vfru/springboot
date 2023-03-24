package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.IdType;

import java.sql.Date;
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
public class Cardetail implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;
    @TableField("carId")
    private Integer carId;

    private Integer seat;
    @TableField("describe")
    private String describe;
    @TableField("dateOfProduction")
    private Date dateOfProduction;

    @TableField("lhw")
    private String lhw;
    @TableField("fuelTypes")
    private String fuelTypes;

    @TableField("oilTank")
    private String oilTank;
    @TableField(exist = false)
    private Cars cars;


}
