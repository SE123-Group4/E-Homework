package org.chp.hw.util;

import com.alibaba.fastjson.JSON;
import lombok.Data;
import org.chp.hw.constant.TextTypeEnum;
import org.chp.hw.entity.OptionItem;
import org.chp.hw.entity.Question;
import org.chp.hw.entity.QuestionContent;
import springfox.documentation.spring.web.json.Json;

import java.util.List;

/**
 * @ClassName: QuestionListTuple
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 9:35 上午
 * @Version 1.0
 **/
@Data
public class QuestionListTuple {
    private String stem;

    private String image;

    private List<OptionItem> options;

    private int score;

    private Object refAnswer;

    private Object analysis;

    private String type;


    public Question toQuestion(){
        Question ret = new Question();
        QuestionContent questionContent = new QuestionContent();
        ret.setScore(score);
        System.out.println(this.toString());
        questionContent.setAnalysis(analysis.toString());
        questionContent.setType(type);
        questionContent.setImage(image);
        questionContent.setStem(stem);
        if(type.equals("ONE_CHOICE") || type.equals("MULTIPLE_CHOICE")){
            questionContent.setChoiceRefAnswer(JSON.parseArray(refAnswer.toString(), OptionItem.class));
            questionContent.setOptions(options);
        }
        if(type.equals("TRUE_OR_FALSE")){
            questionContent.setTfRefAnswer((Boolean) refAnswer);
        }
        if(type.equals(("SUBJECTIVE"))){
            questionContent.setStringRefAnswer(refAnswer.toString());
        }
        ret.setQuestionContent(questionContent);
        return ret;
    }

    public void changeFromQuestion(Question q){
        this.score = q.getScore();
        QuestionContent questionContent= q.getQuestionContent();
        String type = questionContent.getType();
        this.type = type;
        this.stem = questionContent.getStem();
        this.image = questionContent.getImage();
        if(type.equals("ONE_CHOICE") || type.equals("MULTIPLE_CHOICE")){
            this.setRefAnswer(questionContent.getChoiceRefAnswer());
            this.setOptions(questionContent.getOptions());
        }
        if(type.equals("TRUE_OR_FALSE")){
            this.setRefAnswer(questionContent.isTfRefAnswer());
        }
        if(type.equals(("SUBJECTIVE"))){
            this.setRefAnswer(questionContent.getStringRefAnswer());
        }
        this.setAnalysis(questionContent.getAnalysis());
    }
}
