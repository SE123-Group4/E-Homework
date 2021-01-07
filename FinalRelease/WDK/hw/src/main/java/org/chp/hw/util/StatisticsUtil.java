package org.chp.hw.util;

import lombok.Data;

/**
 * @ClassName: StatisticsUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 10:17 下午
 * @Version 1.0
 **/
@Data
public class StatisticsUtil {
    private String teacher;

    private String start;

    private String deadline;

    private String courseName;

    private String title;

    private int maxScore;

    private int minScore;

    private int averageScore;
}
