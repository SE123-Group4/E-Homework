package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: HwStateEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 8:37 下午
 * @Version 1.0
 **/
public enum HwStateEnum {
    DRAFT(1),
    ASSIGNED(2),
    ABORTED(3);

    private int value;
    private HwStateEnum(int value){
        this.value = value;
    }


    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public HwStateEnum fromValue(int value){
        for (HwStateEnum Enum : HwStateEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
