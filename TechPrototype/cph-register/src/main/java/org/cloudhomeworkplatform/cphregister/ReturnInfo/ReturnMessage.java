package org.cloudhomeworkplatform.cphregister.ReturnInfo;

import lombok.Data;

@Data
public class ReturnMessage {
    private String msg;
    private Integer status=200;
}
