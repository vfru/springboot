package com.carsystem.pojo;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//lombok自动生成get,set,有参无参构造方法
public class User {
    private Integer id;
    private String username;
    private String password;
    private boolean isDefault;
    @TableField("")
    private Integer roleId;
    private String name;
    private double phone;
}
