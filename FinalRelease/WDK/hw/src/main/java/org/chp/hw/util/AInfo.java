package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: AInfo
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/19 1:34 下午
 * @Version 1.0
 **/
@Data
public class AInfo {
    private int id;

    private int score;

    private String content;

    private List<String> contentFilePath;

    private String comment;

    private List<String> commentFilePath;
}
