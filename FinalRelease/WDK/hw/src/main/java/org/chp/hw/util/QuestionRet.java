package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: QuestionRet
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/7 2:43 下午
 * @Version 1.0
 **/
@Data
public class QuestionRet {
    private int handsonID;

    private List<QuestionUtil> questionList;
}
