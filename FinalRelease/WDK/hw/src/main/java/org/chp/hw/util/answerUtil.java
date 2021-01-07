package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.chp.hw.entity.Comment;
import org.chp.hw.entity.OptionItem;

import java.util.List;

/**
 * @ClassName: answerUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 12:08 下午
 * @Version 1.0
 **/
@Data
public class answerUtil {
    @JsonProperty("ID")
    private int ID;

    private String stem;

    private List<OptionItem> options;

    private int totalScore;

    private Object refAnswer;

    private Object stuAnswer;

    private String type;

    private int stuScore;

    private Comment comment;
}
