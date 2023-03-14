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
public class Evaluates implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)

    private Integer id;
    @TableField("historyOrderId")
    private Integer historyOrderId;
    @TableField("carId")
    private Integer carId;

    private String carname;
    @TableField("userId")
    private Integer userId;
    @TableField("roleId")
    private Integer roleId;

    private String author;
    @TableField("createTime")
    private LocalDate createTime;

    private String content;
    @TableField("appraiseState")
    private Integer appraiseState;

    private Double star;


}
