package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.chp.hw.entity.ContentImage;
import org.chp.hw.entity.OptionItem;

import java.util.List;

/**
 * @ClassName: QuastionUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 9:30 上午
 * @Version 1.0
 **/
@Data
public class QuestionUtil {
    private String stem;

    private List<OptionItem> options;

    private String type;

    private String image;

    private int score;

    @JsonProperty("ID")
    private int ID;


}
