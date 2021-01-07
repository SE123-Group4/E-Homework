package org.chp.hw.util;

import lombok.Data;
import org.chp.hw.entity.ContentImage;
import org.chp.hw.entity.OptionItem;
import org.chp.hw.entity.Question;
import org.chp.hw.entity.QuestionContent;

import java.util.ArrayList;
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

    private List<OptionItemUtil> options;

    private int score;

    private ContentImage refAnswer;

    private ContentImage analysis;

    private String type;


    public Question toQuestion(){
        Question ret = new Question();
        QuestionContent questionContent = new QuestionContent();
        ret.setScore(score);
        System.out.println(this.toString());
        questionContent.setAnalysis(analysis);
        questionContent.setType(type);
        questionContent.setImage(image);
        questionContent.setStem(stem);
        if(type.equals("ONE_CHOICE") || type.equals("MULTIPLE_CHOICE")){
            List<OptionItem> optionItemList = new ArrayList<>();
            for(OptionItemUtil optionItemUtil : options){
                optionItemList.add(optionItemUtil.toOptionItem());
            }
            questionContent.setOptions(optionItemList);
        }
        questionContent.setRefAnswer(refAnswer);
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
            List<OptionItemUtil> optionItemUtils = new ArrayList<>();
            for(OptionItem optionItem : q.getQuestionContent().getOptions()){
                optionItemUtils.add(fromItemtoUtil(optionItem));
            }
            this.setOptions(optionItemUtils);
        }
        this.setRefAnswer(questionContent.getRefAnswer());
        this.setAnalysis(questionContent.getAnalysis());
    }

    private OptionItemUtil fromItemtoUtil(OptionItem item){
        OptionItemUtil optionItemUtil = new OptionItemUtil();
        ContentImage contentImage = new ContentImage();

        contentImage.setContent(item.getContent());
        contentImage.setImage(item.getImage());
        optionItemUtil.setOption(item.getOption());
        optionItemUtil.setContent(contentImage);

        return optionItemUtil;
    }
}
