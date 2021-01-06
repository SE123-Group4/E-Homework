package com.example.search.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.example.search.Entity.HitQuestion;
import com.example.search.Entity.SearchInfo;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class SearchService {
    public SearchInfo searchHomework(String keywords) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://3.227.208.8:9200/test/test/_search";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(MediaType.APPLICATION_JSON_VALUE));
        String content = "{\"query\":{\"query_string\":{\"default_field\":\"stem\",\"query\":\"" + keywords + "\"}}}";
        HttpEntity<String> request = new HttpEntity<>(content,headers);
        ResponseEntity<String> response = restTemplate.postForEntity( url, request , String.class);
        JSONObject resp = JSON.parseObject(response.getBody());
        //System.out.println(resp);
//        JSONObject hits = resp.getJSONObject("hits");
//        JSONArray hitsArray = hits.getJSONArray("hits");
        String hitsString = JSONObject.toJSONString(resp.getJSONObject("hits").getJSONArray("hits"));
        List<HitQuestion> hitQuestions = JSONObject.parseArray(hitsString, HitQuestion.class);
        List<Integer> questionIDs = new ArrayList<>();
        //System.out.println(hitsArray);
        for (HitQuestion hitQuestion : hitQuestions) {
            System.out.println(hitQuestion);
            questionIDs.add(hitQuestion.get_source().getInteger("hwID"));
        }
        System.out.println(questionIDs);
        HashSet h = new HashSet(questionIDs);
        questionIDs.clear();
        questionIDs.addAll(h);
        System.out.println(questionIDs);
        SearchInfo info = new SearchInfo();
        info.setNum(questionIDs.size());
        info.setData(questionIDs);
        info.setStatus(200);
        return info;
    }
}
