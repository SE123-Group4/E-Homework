package org.chp.hw.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.util.List;

/**
 * @ClassName: AnswerContent
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 11:22 上午
 * @Version 1.0
 **/
@Data
@Document(collection = "answer")
public class AnswerContent {
    @Id
    @Field(name = "ID")
    private int id;

    @Field(name = "type")
    private String type;

    @Field(name = "hwID")
    private int hwID;

    @Field(name = "choiceAnswer")
    private List<OptionItem> choiceAnswer;

    @Field(name = "stringAnswer")
    private String stringAnswer;

    @Field(name = "tfAnswer")
    private boolean tfAnswer;
}
