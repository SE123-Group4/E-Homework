package com.example.search.Controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.search.Entity.SearchInfo;
import com.example.search.Service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
public class SearchController {
    @Autowired
    private SearchService searchService;

    @RequestMapping("/search")
    public SearchInfo searchHomework(@RequestBody Map<String, String> params) {
        //JSONObject userInfo = JSON.parseObject(principal.toString());
        //Integer stuID = Integer.parseInt(params.get("stuID"));
        String keyword = params.get("keyword");
        //Integer pageNo = Integer.parseInt(params.get("pageNo"));
        Integer pageSize = Integer.parseInt(params.get("pageSize"));
        //System.out.println(params);
        return searchService.searchHomework(keyword);
    }
}
