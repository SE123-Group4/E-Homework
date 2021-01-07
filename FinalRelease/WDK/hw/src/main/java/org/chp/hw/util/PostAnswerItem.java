package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @ClassName: PostAnswerItem
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 8:40 下午
 * @Version 1.0
 **/
@Data
public class PostAnswerItem {
    @JsonProperty("ID")
    private int ID;

    private Object option;

    private String content;

    private String image;
}
