package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: PostAnswerUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/6 8:38 下午
 * @Version 1.0
 **/
@Data
public class PostAnswerUtil {
    private List<PostAnswerItem> SimpleChoiceAnswer;

    private List<PostAnswerItem> ChoiceAnswer;

    private List<PostAnswerItem> TorFAnswer;

    private List<PostAnswerItem> SubjectiveAnswer;
}
