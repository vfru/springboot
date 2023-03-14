package com.carsever.pojo;


import lombok.Data;

import java.util.Date;

@Data
public class Evaluates {
    private Integer id;
    private Integer historyOrderId;
    private Integer carId;
    private String carname;
    private Integer userid;
    private Integer roleid;
    private String author;
    private Date createTime;
    private String content;
    private int appraiseState;
    private double star;



}
