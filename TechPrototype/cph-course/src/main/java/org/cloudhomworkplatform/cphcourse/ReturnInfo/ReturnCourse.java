package org.cloudhomworkplatform.cphcourse.ReturnInfo;

import lombok.Data;

@Data
public class ReturnCourse {
    int id;
    String introduction;
    String name;
    String book;
    String teacher;
    String startTime;
    String endTime;
    int state;
    int takes;
    Integer status=200;
}
