package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @ClassName: HandsonUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/8 4:43 上午
 * @Version 1.0
 **/
@Data
public class HandsonUtil {
    @JsonProperty("ID")
    private int ID;

    private int stuNumber;

    private String name;

    private String state;

    private int total;
}
