package org.chp.hw.entity;

import lombok.Data;
import org.bson.types.ObjectId;
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
    @Field(name = "_id")
    private ObjectId id;

    @Id
    @Field(name = "ID")
    private int InnerID;

    @Field(name = "type")
    private String type;

    @Field(name = "hwID")
    private int hwID;

    @Field(name = "image")
    private String image;

    @Field(name = "answer")
    private String answer;

//    @Field(name = "choiceAnswer")
//    private List<OptionItem> choiceAnswer;
//
//    @Field(name = "stringAnswer")
//    private String stringAnswer;
//
//    @Field(name = "tfAnswer")
//    private boolean tfAnswer;
}
