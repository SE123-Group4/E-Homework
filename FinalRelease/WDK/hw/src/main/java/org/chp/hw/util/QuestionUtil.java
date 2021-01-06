package org.chp.hw.util;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassName: QuastionUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/20 9:30 上午
 * @Version 1.0
 **/
@Data
public class QuestionUtil {
    private String stem;

    private List<Option> options;

    private Stem T;

    private Stem F;

    private String type;

//    public Stem toStem(){
//        Stem ret = new Stem();
//        String ret_text = stem.getText();
//        List<String> ret_file = stem.getFileList();
//        if(this.type.equals("ONE_CHOICE") || this.type.equals("MULTIPLE_CHOICE")){
//            if(!options.isEmpty()){
//                for(Option option : options){
//                    Stem option_stem = option.toStem();
//                    ret_text = ret_text + "&&&" + option_stem.getText() + "%%%" + ret_file.size();
//                    ret_file.addAll(option_stem.getFileList());
//                }
//            }
//        }
//        else {
//            if(this.type.equals("TRUE_OR_FALSE")){
//                if(T != null && F != null){
//                    ret_text = ret_text + "&&&" + "T" + ":::" + T.getText() + "%%%" + ret_file.size();
//                    ret_file.addAll(T.getFileList());
//                    ret_text = ret_text + "&&&" + "F" + ":::" + F.getText() + "%%%" + ret_file.size();
//                    ret_file.addAll(F.getFileList());
//                }
//            }
//        }
//        ret.setText(type+"@@@"+ret_text);
//        ret.setFileList(ret_file);
//        return ret;
//    }
//
//    public QuestionUtil(){
//        stem = new Stem();
//        T = new Stem();
//        F = new Stem();
//        options = new ArrayList<>();
//    }
//
//    public void changeFromStem(Stem tem){
//        System.out.println(tem);
//        String text = tem.getText();
//        List<String> stringList = tem.getFileList();
//        String[] text_split = text.split("@@@", 2);
//        System.out.println(text_split[0] +"---" + text_split[1]);
//        type = text_split[0];
//        if(type.equals("ONE_CHOICE") || type.equals("MULTIPLE_CHOICE")){
//            String[] content_split = text_split[1].split("&&&");
//            System.out.println(content_split[1]);
//            List<Option> optionList = new ArrayList<>();
//            stem.setText(content_split[0]);
//            int lastIndex = 0;
//            for(int i=1; i<content_split.length; i++){
//                String[] file_split = content_split[i].split("%%%", 2);
//                int index = Integer.parseInt(file_split[1]);
//                Option option = new Option();
//                option.changeFromString(file_split[0]);
//                optionList.add(option);
//                if(i == 1){
//                    stem.setFileList(tem.getFileList().subList(0, index));
//                }
//                else{
//                    optionList.get(i - 2).setContentFileList(tem.getFileList().subList(lastIndex, index));
//                }
//                lastIndex = index;
//            }
//            optionList.get(content_split.length - 2).setContentFileList(tem.getFileList().subList(lastIndex, tem.getFileList().size()));
//            options = optionList;
//            return ;
//        }
//        else {
//            if(type.equals("TRUE_OR_FALSE")){
//                String[] content_split = text_split[1].split("&&&");
//                stem.setText(content_split[0]);
//                int lastIndex = 0;
//                for(int i=1; i<3; i++){
//                    String[] file_split = content_split[i].split("%%%", 2);
//                    int index = Integer.parseInt(file_split[1]);
//                    String[] tsplit = file_split[0].split(":::");
//                    if(i == 1){
//                        T.setText(tsplit[1]);
//                    }
//                    else {
//                        F.setText(tsplit[1]);
//                    }
//                    if(i == 1){
//                        stem.setFileList(tem.getFileList().subList(0, index));
//                    }
//                    else{
//                        T.setFileList(tem.getFileList().subList(lastIndex, index));
//                    }
//                    lastIndex = index;
//                }
//                F.setFileList(tem.getFileList().subList(lastIndex, tem.getFileList().size()));
//                return;
//            }
//        }
//        stem = tem;
//        return;
//    }
}
