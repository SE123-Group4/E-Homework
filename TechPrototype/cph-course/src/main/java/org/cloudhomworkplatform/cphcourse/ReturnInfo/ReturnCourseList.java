package org.cloudhomworkplatform.cphcourse.ReturnInfo;

import lombok.Data;

@Data
public class ReturnCourseList {
    int id;
    String introduction;
    String name;
    String startTime;
    String endTime;
    int state;
    int takes;
}
