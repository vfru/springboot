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
 * @since 2023-03-14
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Comments implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String author;

    private String content;

    private Integer roleId;

    private LocalDate datetime;

    private Integer evaluatesId;

    private Evaluates evaluates;


}
