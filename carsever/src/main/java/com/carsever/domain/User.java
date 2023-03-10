package com.carsever.domain;

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
    private boolean  block;
    @TableField("roleId")
    private Integer roleId;
    private String name;
    private String phone;
}
