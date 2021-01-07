package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: TextTypeEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/19 10:14 上午
 * @Version 1.0
 **/
public enum TextTypeEnum {
    QUASCTIONCONTENT(1),
    QUASTIONANSWER(2),
    QUASTIONANALYSIS(3),
    ANSWERCONTENT(4),
    COMMENT(5);

    private int value;
    private TextTypeEnum(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public TextTypeEnum fromValue(int value){
        for (TextTypeEnum Enum : TextTypeEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
