package org.chp.hw.util;

import lombok.Data;

/**
 * @ClassName: ResponseUtil
 * @Description: 包装所有的response方便前端判断
 * @Author: DakeWang
 * @Date: 2020/11/28 2:06 下午
 * @Version 1.0
 **/
@Data
public class ResponseUtil {
    private int status;

    private String msg;

    private Object data;

    public void sucessfulResponse(Object object){
        this.data = object;
        this.status = 200;
        this.msg = "成功的返回值";
    }
}
