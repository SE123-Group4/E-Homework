package org.chp.hw.service;

import org.chp.hw.entity.Homework;
import org.chp.hw.util.*;

import java.text.ParseException;
import java.util.List;

/**
 * @ClassName: HwService
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:48 下午
 * @Version 1.0
 **/
public interface HwService {
    response getORcreateHw(Integer hwID, Integer teaID) throws Exception;

    response resetByHwInfo(HwInfo hwInfo);

    response getAnswerList(int id);

    response correct(List<CorrectUtil> correctUtils);

    response statistics(int id);

    response postAnswer(PostAnswerUtilPack postAnswerUtilPack);

    response getQuestions(int hdID);

    response getHwList(int stuID) throws ParseException;

    response courseHwList(int courseID, String role, Integer ID) throws ParseException;

    response teaGetQuestion(int TeaID) throws ParseException;

    response getHandsonList(int hwID);
}
