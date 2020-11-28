package org.cloudhomworkplatform.cphcourse.Entity;

import lombok.Data;
import org.cloudhomworkplatform.cphcourse.EmbeddedId.GroupmemberId;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name ="groupmember",schema = "chp")
public class Groupmember {
    @EmbeddedId
    private GroupmemberId id;
}
