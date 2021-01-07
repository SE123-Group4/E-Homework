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

import java.text.ParseException;
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
    @RequestMapping(path = "/getAssignHomework")
    public response getHwInfo(@RequestParam(name = "ID") Integer id, @RequestParam(name = "TeaID") Integer tid) throws Exception {
        System.out.println("GET REQUEST");
        return hwService.getORcreateHw(id, tid);
    }

    @RequestMapping(path = "/AssignHomework", method = RequestMethod.POST)
    public response assignHw(@RequestBody Map<String, HwInfo> params) throws Exception {
        return hwService.resetByHwInfo(params.get("hwinfo"));
    }
    /**
     * @Auther: DakeWang
     * @Description: 批改作业
     * @Date: 1:06 下午 2020/12/10
     **/
    @RequestMapping(path = "/student_answer", method = RequestMethod.POST)
    public response getAnswer(@RequestBody Map<String,Integer> params){
        System.out.println(params.get("handsonID"));
        return hwService.getAnswerList(params.get("handsonID"));
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
    public response answer(@RequestBody String params){
        System.out.println(params);
        PostAnswerUtilPack postAnswerUtilPack = JSON.parseObject(params, PostAnswerUtilPack.class);
        System.out.println(postAnswerUtilPack);
        return hwService.postAnswer(postAnswerUtilPack);
    }

    @RequestMapping(path = "/questions")
    public response getQuestions(@RequestBody Map<String, Integer> params){
        return hwService.getQuestions(params.get("handsonID"));
    }

    @RequestMapping(path = "/stu_homework_list")
    public response homeworkList(@RequestBody Map<String, Integer> params) throws ParseException {
        return hwService.getHwList(params.get("stuID"));
    }

    @RequestMapping(path = "/course_homework_list")
    public response homeworklistbycourse(@RequestBody Map<String, Object> params) throws ParseException {
        return hwService.courseHwList((int)params.get("courseID"), (String)params.get("role"), (Integer) params.get("ID"));
    }

    @RequestMapping(path = "/tea_homework_list")
    public response teaGetQuestion(@RequestBody Map<String, Integer> params) throws ParseException {
        return hwService.teaGetQuestion(params.get("teaID"));
    }

    @RequestMapping(path = "/get_handson")
    public response getHandson(@RequestBody Map<String, Integer> params){
        return hwService.getHandsonList(params.get("homeworkID"));
    }
}