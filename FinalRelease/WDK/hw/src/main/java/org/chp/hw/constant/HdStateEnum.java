package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: HdStateEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 9:04 下午
 * @Version 1.0
 **/
public enum HdStateEnum {
    UNSUBMITTED(1),
    SUBMITTED(2),
    LATE(3),
    CORRECTED(4);

    private int value;
    private HdStateEnum(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public HdStateEnum fromValue(int value){
        for (HdStateEnum Enum : HdStateEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
