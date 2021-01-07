package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: TotalInfo
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:14 下午
 * @Version 1.0
 **/
@Data
public class TotalInfo {
    private HwInfo hwInfo;

    private List<CourseInfo> courseInfoList;
}
