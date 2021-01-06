package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: HwResultEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 8:37 下午
 * @Version 1.0
 **/
public enum HwResultEnum {
    SUBMIT(1),
    DEADLINE(2);

    private int value;
    private HwResultEnum(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public HwResultEnum fromValue(int value){
        for (HwResultEnum Enum : HwResultEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
