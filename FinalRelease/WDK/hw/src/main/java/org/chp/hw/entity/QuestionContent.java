package org.chp.hw.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;
import java.util.List;

/**
 * @ClassName: QuestionContent
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 11:06 上午
 * @Version 1.0
 **/
@Data
@Document(collection = "question")
public class QuestionContent {
    @Id
    @Field(name = "ID")
    private int id;

    @Field(name = "stem")
    private String stem;

    @Field(name = "image")
    private String image;

    @Field(name = "type")
    private String type;

    @Field(name = "options")
    private List<OptionItem> options;

    @Field(name = "choiceRefAnswer")
    private List<OptionItem> choiceRefAnswer;

    @Field(name = "stringRefAnswer")
    private String stringRefAnswer;

    @Field(name = "tfRefAnswer")
    private boolean tfRefAnswer;

    @Field(name = "analysis")
    private String analysis;
}
