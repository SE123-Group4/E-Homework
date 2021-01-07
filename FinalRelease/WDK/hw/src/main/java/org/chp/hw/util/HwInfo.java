package org.chp.hw.util;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.chp.hw.constant.HwResultEnum;
import org.chp.hw.constant.HwStateEnum;
import org.chp.hw.entity.Handson;
import org.chp.hw.entity.Homework;
import org.chp.hw.entity.Question;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @ClassName: HwInfo
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:08 下午
 * @Version 1.0
 **/
@Data
public class HwInfo {
    @JsonProperty("ID")
    private int ID;

    private String state;

    private String title;

    private int courseId;

    private List<Integer> submitIdList;

    private List<QuestionListTuple> questionList;

    private int totals;

    private boolean isDelayed;

    private boolean isRepeated;

    private boolean isTimed;

    private boolean isGrouped;

    private String resultAfter;

    private String deadlineDate;

    private String assignDate;


    public void fromHWtoHwInfo(Homework homework) throws ParseException {
        this.setID(homework.getId());
        this.setState(homework.getState().toString());
        this.setTitle(homework.getTitle());
        this.setTotals(homework.getTotals());
        this.setDelayed(homework.isIsdelayed());
        this.setRepeated(homework.isIsrepeated());
        this.setTimed(homework.isIstimed());
        this.setGrouped(homework.isIsgrouped());
        this.setResultAfter(homework.getResultafter().toString());
        this.setDeadlineDate(homework.getDeadline());
        this.setAssignDate(homework.getAssignTime());
        List<Handson> handsonList = homework.getHandsonList();
        List<Integer> submiterList = new ArrayList<>();
        for(Handson handson : handsonList){
            submiterList.add(handson.getId());
        }
        this.setSubmitIdList(submiterList);
        List<Question> questionList = homework.getQuestionList();
        List<QuestionListTuple> questionListTupleList = new ArrayList<>();
        for(Question question : questionList){
            QuestionListTuple questionListTuple = new QuestionListTuple();
            questionListTuple.changeFromQuestion(question);
            questionListTupleList.add(questionListTuple);
        }
        this.setQuestionList(questionListTupleList);
    }

//    private Date str2Date(String string) throws ParseException {
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date date = sdf.parse(string);
//        System.out.println(sdf.parse(string));
//        return date;
//    }
}
