package com.example.course.EmbeddedId;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class GroupmemberId implements Serializable {
    @Column(name = "groupID")
    private int groupID;

    @Column(name = "member")
    private int member;
}
