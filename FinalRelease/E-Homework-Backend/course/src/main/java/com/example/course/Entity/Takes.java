package com.example.course.Entity;

import lombok.Data;
import com.example.course.EmbeddedId.TakesId;

import javax.persistence.Basic;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name ="takes",schema = "homework")
public class Takes{
    @EmbeddedId
    private TakesId ID;
}
