package com.example.course.Entity;

import lombok.Data;
import com.example.course.EmbeddedId.GroupmemberId;

import javax.persistence.Basic;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name ="groupmember",schema = "homework")
public class Groupmember {
    @EmbeddedId
    private GroupmemberId ID;
}
