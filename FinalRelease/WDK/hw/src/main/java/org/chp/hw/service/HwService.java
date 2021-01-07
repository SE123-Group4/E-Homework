package org.chp.hw.service;

import org.chp.hw.entity.Homework;
import org.chp.hw.util.*;

import java.util.List;

/**
 * @ClassName: HwService
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:48 下午
 * @Version 1.0
 **/
public interface HwService {
    TotalInfo getORcreateHw(Integer hwID, Integer teaID) throws Exception;

    void resetByHwInfo(HwInfo hwInfo);

    response getAnswerList(int id);

    response correct(List<CorrectUtil> correctUtils);

    response statistics(int id);

    response postAnswer(PostAnswerUtil postAnswerUtil);
}
