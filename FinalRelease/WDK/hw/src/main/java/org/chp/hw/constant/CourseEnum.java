package org.chp.hw.constant;

import java.util.Objects;

/**
 * @ClassName: CourseEnum
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/16 10:51 下午
 * @Version 1.0
 **/
public enum CourseEnum {
    UNDERREVIEW(1),
    NOTSTARTED(2),
    UNDERWAY(3),
    FINISHED(4),
    NOTPASS(5);

    private int value;
    private CourseEnum(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public CourseEnum fromValue(int value){
        for (CourseEnum Enum : CourseEnum.values()) {
            if (Objects.equals(value, Enum.getValue())) {
                return Enum;
            }
        }
        throw new IllegalArgumentException();
    }
}
