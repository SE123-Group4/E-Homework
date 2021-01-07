package org.chp.hw.serviceimpl;

import org.chp.hw.HwApplicationTests;
import org.chp.hw.service.HwService;
import org.chp.hw.util.HwInfo;
import org.junit.Test;
import org.junit.jupiter.api.TestTemplate;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@Rollback
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class HwServiceTest extends HwApplicationTests {
    @Autowired
    private HwService hwService;

    @Test
    public void contextLoads() {
    }

    @Test
    public void changeHwtoHwInfo(){
        HwInfo hwInfo=new HwInfo();
        hwInfo.setID(1);
        hwInfo.setState("ASSIGNED");
    }
}
