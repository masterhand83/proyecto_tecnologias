/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dataAccess;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.input.SAXBuilder;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;

/**
 *
 * @author comrade
 */
public class DataAccess {
    private String path;
    private Document doc;
    private Element root;
    public DataAccess(String path){
        this.path = path;
        this.root = getRoot();
        this.doc = this.root.getDocument();
    }

    private void updateFile() throws IOException {
        XMLOutputter output = new XMLOutputter();
        output.setFormat(Format.getPrettyFormat());
        try (FileWriter fw = new FileWriter(path + "Preguntas.xml")) {
            output.output(doc, fw);
        }
    }

    private Element getRoot() {
        Element new_root = new Element("root");
        try {
            System.out.println(path + "Preguntas.xml");
            File inputFile = new File(path + "Preguntas.xml");
            SAXBuilder saxBuilder = new SAXBuilder();
            Document document = saxBuilder.build(inputFile);
            new_root = document.getRootElement();
        } catch (Exception ex) {
            Logger.getLogger(DataAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new_root;
    }
}
