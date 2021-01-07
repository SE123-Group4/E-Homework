package com.example.course.ServiceImpl;

import org.springframework.web.multipart.MultipartFile;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import com.example.course.Service.ImportExcelService;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImportExcelServiceImpl implements ImportExcelService {
    @Override
    public List<String> importExcelWithSimple(MultipartFile file) throws Exception {
        InputStream is =null;
        is=file.getInputStream();
        Workbook workbook=new XSSFWorkbook(is);
        Sheet sheet = null;
        Row row = null;
        Cell cell=null;
        List<String> students=new ArrayList<>();
        for (int i=0;i<workbook.getNumberOfSheets();i++){
            sheet=workbook.getSheetAt(i);
            if (sheet==null){
                continue;
            }
            int j=sheet.getFirstRowNum();
            row=sheet.getRow(j);
            int k;
            for(k=row.getFirstCellNum();k<=row.getLastCellNum();k++){
                cell=row.getCell(k);
                if(cell.getStringCellValue().equals("学号")){
//                    System.out.print(k);
                    break;
                }
            }
            for(j=sheet.getFirstRowNum()+1;j<=sheet.getLastRowNum();j++){
                row=sheet.getRow(j);
                cell=row.getCell(k);
                cell.setCellType(CellType.STRING);
                String studentID=cell.getStringCellValue();
//                System.out.print(studentID);
                students.add(studentID);
            }
        }
        return students;
    }

}
