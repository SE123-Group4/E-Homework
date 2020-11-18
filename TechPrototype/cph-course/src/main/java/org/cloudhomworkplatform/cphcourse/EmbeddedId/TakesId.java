package org.cloudhomworkplatform.cphcourse.EmbeddedId;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class TakesId implements Serializable {
    @Column(name = "student")
    private int student;

    @Column(name = "courseID")
    private int courseID;
}
