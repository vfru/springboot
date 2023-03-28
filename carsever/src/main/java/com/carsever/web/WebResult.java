package com.carsever.web;

import lombok.Data;

import javax.xml.transform.Result;

@Data
public class WebResult {
    private int code; //200/400
    private String msg;//成功/失败
    private Long total;//总记录数
    private Object data;//数据


    public static WebResult fail() {
        return result(400, "失败", 0L, null);
    }

    public static WebResult fail(String msg) {
        return result(400, msg, 0L, null);
    }

    public static WebResult success() {
        return result(200, "成功", 0L, null);
    }

    public static WebResult success(Object data) {
        return result(200, "成功", 0L, data);
    }

    public static WebResult success(Object data, long total) {
        return result(200, "成功", total, data);
    }


    private static WebResult result(int code, String msg, Long total, Object data) {
        WebResult res = new WebResult();
        res.setData(data);
        res.setCode(code);
        res.setMsg(msg);
        res.setTotal(total);
        return res;
    }


}
