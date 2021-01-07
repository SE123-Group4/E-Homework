package org.chp.hw.util;

import lombok.Data;
import org.chp.hw.entity.ContentImage;
import org.chp.hw.entity.OptionItem;

/**
 * @ClassName: OptionItemUtil
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2021/1/7 8:08 下午
 * @Version 1.0
 **/
@Data
public class OptionItemUtil {
    private String option;

    private ContentImage content;

    public OptionItem toOptionItem(){
        OptionItem ret = new OptionItem();

        ret.setContent(content.getContent());
        ret.setImage(content.getImage());
        ret.setOption(option);

        return ret;
    }
}
