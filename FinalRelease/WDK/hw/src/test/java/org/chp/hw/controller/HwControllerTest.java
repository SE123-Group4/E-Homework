package org.chp.hw.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.chp.hw.HwApplication;
import org.chp.hw.HwApplicationTests;
import org.chp.hw.util.TotalInfo;
import org.chp.hw.util.response;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Rollback
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class HwControllerTest extends HwApplicationTests {
    private MockMvc mockMvc;
    private ObjectMapper om = new ObjectMapper();

    @Autowired
    private WebApplicationContext context;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void checkGetHwInfo() throws Exception {
        MvcResult result=mockMvc.perform(get("/Homework/AssignHomework").content("{\"ID\":0,\"TeaID\":1}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        TotalInfo courses=om.readValue(resultContent, new TypeReference<TotalInfo>() {});
        assertEquals(1,courses.getCourseInfoList().size());
    }

    @Test
    public void AssignHw() throws Exception {
        MvcResult result=mockMvc.perform(post("/Homework/AssignHomework").content("{\n" +
                "    \"hwinfo\":{\n" +
                "        \"ID\": 0,\n" +
                "        \"state\": \"ASSIGNED\",\n" +
                "        \"title\": \"NCT DREAM\",\n" +
                "        \"courseId\": 1,\n" +
                "        \"submitIdList\": [3],\n" +
                "        \"totals\":10,\n" +
                "        \"isDelayed\": false,\n" +
                "        \"isRepeated\": false,\n" +
                "        \"isTimed\": false,\n" +
                "        \"isGrouped\": false,\n" +
                "        \"resultAfter\":2,\n" +
                "        \"deadlineDate\":20210915,\n" +
                "        \"assignDate\":20210915,\n" +
                "        \"questionList\":[\n" +
                "        {\n" +
                "            \"stem\":  \"TO THE WORLD\",  \n" +
                "            \"images\": null,\n" +
                "            \"options\": [\n" +
                "                    {\n" +
                "                        \"option\": \"A\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE A\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"B\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE B\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"C\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE C\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"D\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE D\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    } \n" +
                "            ],\n" +
                "            \"type\": \"ONE_CHOICE\",\n" +
                "\n" +
                "            \"score\": 10,\n" +
                "\n" +
                "            \"refAnswer\":[{\n" +
                "                \"content\": \"C\",\n" +
                "                \"image\":null\n" +
                "            }],\n" +
                "            \"analysis\": {\n" +
                "                \"content\": \"WE HOT WE YOUNG\",\n" +
                "                \"image\":null\n" +
                "            }\n" +
                "        },\n" +
                "        {\n" +
                "        \n" +
                "            \"stem\": \"NCT DREAM WE YOUNG\",\n" +
                "            \"type\": \"TRUE_OR_FALSE\",\n" +
                "\n" +
                "            \"score\": 10,\n" +
                "\n" +
                "            \"refAnswer\": true,\n" +
                "\n" +
                "            \"analysis\": {\n" +
                "                \"content\": \"WE HOT WE YOUNG\",\n" +
                "                \"image\":null\n" +
                "            }\n" +
                "        },\n" +
                "        {\n" +
                "            \"stem\": \"NCT127 REGULAR\",\n" +
                "            \"type\": \"MULTIPLE_CHOICE\",\n" +
                "            \"options\": [\n" +
                "                    {\n" +
                "                        \"option\": \"A\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE A\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"B\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE A\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"C\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE A\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"option\": \"D\", \n" +
                "                        \"content\":{\n" +
                "                            \"content\": \"TO THE A\",\n" +
                "                            \"image\":null\n" +
                "                        }\n" +
                "                    } \n" +
                "                ],\n" +
                "\n" +
                "            \"score\": 10,\n" +
                "\n" +
                "            \"refAnswer\":[{\n" +
                "                \"content\": \"C,A\",\n" +
                "                \"image\":null\n" +
                "            }],\n" +
                "\n" +
                "            \"analysis\": {\n" +
                "                \"content\": \"WE HOT WE YOUNG\",\n" +
                "                \"image\":null\n" +
                "            }\n" +
                "        },\n" +
                "        {\n" +
                "        \n" +
                "            \"stem\": \"NCT DREAM WE YOUNG\",\n" +
                "            \"type\": \"SUBJECTIVE\",\n" +
                "\n" +
                "            \"score\": 10,\n" +
                "\n" +
                "            \"refAnswer\": {\n" +
                "                \"content\": \"LUCAS\",\n" +
                "                \"image\":null\n" +
                "            },\n" +
                "\n" +
                "            \"analysis\": {\n" +
                "                \"content\": \"WE HOT WE YOUNG\",\n" +
                "                \"image\":null\n" +
                "            }\n" +
                "        }\n" +
                "    ]\n" +
                "    }\n" +
                "}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
    }
    @Test
    public void checkGetAnswer() throws Exception {
        MvcResult result=mockMvc.perform(post("/student_answer").content("{\"homeworkAssignID\":2}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkCorrection() throws Exception {
        MvcResult result=mockMvc.perform(post("/correction").content("[\n" +
                "    {\n" +
                "        \"ID\": 3,\n" +
                "        \"stuScore\": 5,\n" +
                "        \"comment\":{\n" +
                "            \"content\": \"GOOD JOB\"\n" +
                "        }\n" +
                "    }\n" +
                "]").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkAnswer() throws Exception {
        MvcResult result=mockMvc.perform(post("/answer").content("{\n" +
                "    \"handsonID\": 15,\n" +
                "    \"answer\":{\n" +
                "        \"SimpleChoiceAnswer\":[{\"ID\": 3, \"option\": [{\"option\": \"C\", \"content\": \"TO THE C\", \"image\": null}]}],\n" +
                "        \"ChoiceAnswer\":[{\"ID\": 4, \"option\": [{\"option\": \"C\", \"content\": \"TO THE C\", \"image\":null}]}],\n" +
                "        \"TorFAnswer\":[{\"ID\":5, \"option\": true}],\n" +
                "        \"SubjectiveAnswer\":[{\"ID\":6, \"content\":\"MARK\" }]\n" +
                "    }\n" +
                "}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkStatistics() throws Exception {
        MvcResult result=mockMvc.perform(post("/statistics").content("{\"homeworkID\":2}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkQuestions() throws Exception {
        MvcResult result=mockMvc.perform(post("/questions").content("{\"handsonID\":12}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkStudentList() throws Exception {
        MvcResult result=mockMvc.perform(get("/stu_homework_list").content("{\"stuID\":3}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkCourseList() throws Exception {
        MvcResult result=mockMvc.perform(get("/course_homework_list").content("{\"courseID\":1,\"role\":\"ROLE_TEACHER\",\"ID\":1}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }

    @Test
    public void checkTeacherList() throws Exception {
        MvcResult result=mockMvc.perform(get("/tea_homework_list").content("{\"teaID\":1}").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();
        String resultContent=result.getResponse().getContentAsString();
        response courses=om.readValue(resultContent, new TypeReference<response>() {});
        assertEquals(200,courses.getStatus());
    }
}
