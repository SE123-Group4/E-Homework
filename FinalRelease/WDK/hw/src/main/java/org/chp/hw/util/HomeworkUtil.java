package org.chp.hw.util;

import lombok.Data;

/**
 * @ClassName: HomeworkUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/7 3:39 下午
 * @Version 1.0
 **/
@Data
public class HomeworkUtil {
    private int ID;

    private String title;

    private String post;

    private String ddl;

    private String state;

    private int finished;

    private int unfinished;

    private int late;

    private int correct;
}
