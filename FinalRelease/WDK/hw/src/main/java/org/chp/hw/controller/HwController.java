package org.chp.hw.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import org.chp.hw.service.HwService;
import org.chp.hw.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @ClassName: HwController
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/17 1:02 下午
 * @Version 1.0
 **/
@Api(tags = {"作业接口"})
@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class HwController {
    private static final Logger logger = LoggerFactory.getLogger(HwController.class);

    @Autowired
    HwService hwService;
    /**
    * @Auther: DakeWang
    * @Description: 获取作业信息若id为0则新建作业
    * @Date: 1:06 下午 2020/11/17
    **/
    @RequestMapping(path = "/Homework/AssignHomework", method = RequestMethod.GET)
    public TotalInfo getHwInfo(@RequestBody Map<String,Integer> params) throws Exception {
        System.out.println(params.get("ID"));
        return hwService.getORcreateHw(params.get("ID"), params.get("TeaID"));
    }

    @RequestMapping(path = "/Homework/AssignHomework", method = RequestMethod.POST)
    public void assignHw(@RequestBody JSONObject params) throws Exception {
        System.out.println(params.get("hwinfo").getClass());
        JSONObject HwInfo_json = JSONObject.parseObject(JSON.toJSONString(params.get("hwinfo")));
        HwInfo hwInfo = (HwInfo)JSONObject.toJavaObject(HwInfo_json, HwInfo.class);
        System.out.println(hwInfo);
        hwService.resetByHwInfo(hwInfo);
    }
    /**
     * @Auther: DakeWang
     * @Description: 批改作业
     * @Date: 1:06 下午 2020/12/10
     **/
    @RequestMapping(path = "/student_answer", method = RequestMethod.POST)
    public response getAnswer(@RequestBody Map<String,Integer> params){
        System.out.println(params.get("homeworkAssignID"));
        return hwService.getAnswerList(params.get("homeworkAssignID"));
    }

    @RequestMapping(path = "/correction", method = RequestMethod.POST)
    public response correction(@RequestBody String params){
        List<CorrectUtil> correctUtils = JSON.parseArray(params, CorrectUtil.class);
        System.out.println(correctUtils);
        return hwService.correct(correctUtils);
    }

    @RequestMapping(path = "/statistics")
    public response statisctics(@RequestBody Map<String, Integer> params){
        return hwService.statistics(params.get("homeworkID"));
    }

    @RequestMapping(path = "/answer")
    public response answer(@RequestBody PostAnswerUtil params){
        return hwService.postAnswer(params);
    }
}
