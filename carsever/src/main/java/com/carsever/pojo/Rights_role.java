package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

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
public class Rights_role implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableField("role_0Id")
    private Integer role_0Id;

    @TableField("roleId")
    private Integer roleId;

}
