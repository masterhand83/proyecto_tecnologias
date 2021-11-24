/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dataAccess;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.xml.soap.SOAPFault;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author comrade
 */
public class MultipartFormAccess {
    private boolean isMultipart;
    private String filePath;
    private int maxFileSize = 50 * 1024 * 1024*1024;
    private int maxMemSize = 4 * 1024 * 1024 * 1024 * 1024;
    private File file;
    private HashMap<String, String> filePaths;
    private HashMap<String, String> parameters;
    
    public MultipartFormAccess(String path){
        // /home/comrade/NetBeansProjects/2CV13IDA32IDP1/target/2CV13IDA32IDP1-1/
        filePath = path;
        parameters = new HashMap<>();
    }
    
    public boolean upload(HttpServletRequest req){
        if (!ServletFileUpload.isMultipartContent(req)){
            System.out.println("FORM IS NOT MULTIPART");
            return false;
        }
        ServletFileUpload upload = getUploader();
        try{
            List<FileItem> l = upload.parseRequest(req);
            Iterator i = l.listIterator();
        
            while(i.hasNext()){
                FileItem fi = (FileItem)i.next();
                if (!fi.isFormField()) {
                    saveFileOnDisk(fi); 
                } else {
                    processField(fi);
                }
            }
            
        }catch(Exception e){
            e.printStackTrace();
        }
        return true;
    }
    
    
    private ServletFileUpload getUploader() {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        factory.setSizeThreshold(1024*1024*100);
        factory.setRepository(new File(filePath));
        ServletFileUpload upload = new ServletFileUpload(factory);
        upload.setFileSizeMax(1024 * 1024 * 100);
        return upload;
    }
    private void saveFileOnDisk(FileItem fi) throws Exception {
        String fieldName = fi.getFieldName();
        String fileName = fi.getName();
        String fullpath = getFullPathBasedOnName(fileName);
        parameters.put(fieldName, fileName);
        System.out.println(parameters);
        file = new File(fullpath);
        fi.write(file);
    }
    private void processField(FileItem fi) throws Exception {
        this.parameters.put(fi.getFieldName(), fi.getString());
    }
    
    private String getFullPathBasedOnName(String fileName) {
        if (fileName.lastIndexOf(File.separatorChar) >= 0){
            return filePath + fileName.substring(fileName.lastIndexOf(File.separatorChar));
        }
        return filePath + fileName.substring(fileName.lastIndexOf(File.separatorChar) + 1);
    }
    
    public HashMap<String, String> getParams(){
        return this.parameters;
    }
}
