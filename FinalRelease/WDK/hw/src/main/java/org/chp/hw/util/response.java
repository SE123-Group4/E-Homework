package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: response
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 12:07 下午
 * @Version 1.0
 **/
@Data
public class response {
    private int status;

    private String msg;

    private Object data;
}
