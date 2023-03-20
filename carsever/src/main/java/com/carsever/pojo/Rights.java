package com.carsever.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.util.List;

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
public class Rights implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String label;

    private String key;

    private Integer grade;

    private Integer pagepermission;

    @TableField(exist = false)
    private List<Children> childrenList;


}
