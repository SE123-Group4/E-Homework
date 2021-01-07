package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.chp.hw.entity.Group;
import org.chp.hw.entity.Student;

/**
 * @ClassName: tupleInfo
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:21 下午
 * @Version 1.0
 **/
@Data
public class TupleInfo {
    @JsonProperty("ID")
    private int ID;

    private String name;

    public void fromGroupToTuple(Group group){
        this.ID = group.getId();
        this.name = group.getName();
    }

    public void fromStudentToTuple(Student student){
        this.ID = student.getId();
        this.name = student.getName();
    }
}
