package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: RoleEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:36 下午
 * @Version 1.0
 **/
public enum RoleEnum {
    STUDENT(1),
    TEACHER(2),
    ADMINISTRATOR(3);

    private int value;
    private RoleEnum(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public RoleEnum fromValue(int value){
        for (RoleEnum Enum : RoleEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
