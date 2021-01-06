package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: QuestionTypeEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/28 2:20 下午
 * @Version 1.0
 **/
public enum QuestionTypeEnum {
    ONE_CHOICE(1),
    MULTIPLE_CHOICE(2),
    FILL_IN_THE_BLANK(3),
    TRUE_OR_FALSE(4),
    SUBJECTIVE(5);


    private int value;
    private QuestionTypeEnum(int value){
        this.value = value;
    }


    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public QuestionTypeEnum fromValue(int value){
        for (QuestionTypeEnum Enum : QuestionTypeEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
