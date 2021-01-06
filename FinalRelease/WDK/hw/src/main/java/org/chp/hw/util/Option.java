package org.chp.hw.util;

import lombok.Data;

import java.util.List;

/**
 * @ClassName: Option
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 9:33 上午
 * @Version 1.0
 **/
@Data
public class Option {
    private String option;

    private Stem content;

//    public Stem toStem(){
//        Stem ret = new Stem();
//        String ret_text = option+":::"+content.getText();
//        List<String> ret_content = content.getFileList();
//        ret.setText(ret_text);
//        ret.setFileList(ret_content);
//        return ret;
//    }
//    public Option(){
//        content = new Stem();
//    }
//
//    public void changeFromString(String text){
//        String[] split = text.split(":::", 2);
//        option = split[0];
//        content.setText(split[1]);
//    }
//
//    public void setContentFileList(List<String> fileList){
//        content.setFileList(fileList);
//    }
}
