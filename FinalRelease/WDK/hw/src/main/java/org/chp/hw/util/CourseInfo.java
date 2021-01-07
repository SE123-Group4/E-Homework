package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.chp.hw.entity.Group;
import org.chp.hw.entity.Student;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName: CourseInfo
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:08 下午
 * @Version 1.0
 **/
@Data
public class CourseInfo {
    @JsonProperty("ID")
    private int ID;

    private String name;

    private List<TupleInfo> groupList;

    private List<TupleInfo> studentList;

    public void changetoGroupList(List<Group> groups){
        List<TupleInfo> tupleInfos = new ArrayList<>();
        for(Group group : groups){
            TupleInfo tupleInfo = new TupleInfo();
            tupleInfo.fromGroupToTuple(group);
            tupleInfos.add(tupleInfo);
        }
        this.groupList = tupleInfos;
    }

    public void changetoStudentList(List<Student> students){
        List<TupleInfo> tupleInfos = new ArrayList<>();
        for(Student student : students){
            TupleInfo tupleInfo = new TupleInfo();
            tupleInfo.fromStudentToTuple(student);
            tupleInfos.add(tupleInfo);
        }
        this.studentList = tupleInfos;
    }
}
