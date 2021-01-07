package org.chp.hw.exception;

/**
 * @ClassName: StorageException
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/19 12:46 下午
 * @Version 1.0
 **/
public class StorageException extends RuntimeException {

    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
