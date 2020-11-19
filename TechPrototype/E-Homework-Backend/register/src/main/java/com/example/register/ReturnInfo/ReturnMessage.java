package com.example.register.ReturnInfo;

import lombok.Data;

@Data
public class ReturnMessage {
    // 200：成功， 401：没有该学生，402：已注册
    private int status;
    private String msg;
}
