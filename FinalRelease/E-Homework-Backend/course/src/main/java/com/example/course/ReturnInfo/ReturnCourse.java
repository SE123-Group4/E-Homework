package com.example.course.ReturnInfo;

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
    int status=200;
}
