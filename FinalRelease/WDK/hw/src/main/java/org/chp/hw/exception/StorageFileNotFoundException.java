package org.chp.hw.exception;

/**
 * @ClassName: StorageFileNotFoundException
 * @Description: TODO
 * @Author: DakeWang
 * @Date: 2020/11/19 12:46 下午
 * @Version 1.0
 **/
public class StorageFileNotFoundException extends StorageException {

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
