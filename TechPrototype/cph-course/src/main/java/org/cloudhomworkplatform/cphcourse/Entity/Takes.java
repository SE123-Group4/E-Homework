package org.cloudhomworkplatform.cphcourse.Entity;

import lombok.Data;
import org.cloudhomworkplatform.cphcourse.EmbeddedId.TakesId;

import javax.persistence.Basic;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name ="takes",schema = "chp")
public class Takes{
    @EmbeddedId
    private TakesId id;
}
