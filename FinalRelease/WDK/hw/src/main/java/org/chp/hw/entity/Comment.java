package org.chp.hw.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.*;

/**
 * @ClassName: Comment
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 1:41 下午
 * @Version 1.0
 **/
@Data
@Document(collection = "comment")
public class Comment {
    @Id
    @Field(name = "ID")
    private int id;

    @Field(name = "time")
    private String time;

    @Field(name = "content")
    private String content;

    @Field(name = "image")
    private String image;
}
