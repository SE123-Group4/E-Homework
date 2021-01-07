package org.chp.hw.util;

import lombok.Data;
import org.chp.hw.constant.TextTypeEnum;

import java.util.List;

/**
 * @ClassName: stem
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 9:31 上午
 * @Version 1.0
 **/
@Data
public class Stem {
    private String text;

    private List<String> fileList;

    public Stem(String s, List<String> o) {
        text = s;
        fileList = o;
    }

//    public RichText toRichText(TextTypeEnum typeEnum){
//        RichText ret = new RichText();
//        ret.setText(text);
//        ret.setFileList(fileList);
//        ret.setType(typeEnum);
//        return ret;
//    }
//
//    public Stem(RichText richText){
//        this.text = richText.getText();
//        this.fileList = richText.getFileList();
//    }
//
//    public Stem(){
//
//    }
}
