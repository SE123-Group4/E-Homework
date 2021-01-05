package java.com.example.course.Service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ImportExcelService {

    /**
     * 获取导入的Excel表中数据
     * @param file 文件
     * @return 返回集合
     */
    List<String> importExcelWithSimple(MultipartFile file) throws Exception;
}
