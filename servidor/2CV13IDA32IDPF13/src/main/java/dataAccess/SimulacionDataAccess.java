/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dataAccess;
import dataAccess.DataAccess;
import entidades.Pelota;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jdom2.Document;
import org.jdom2.Element;
import entidades.Simulacion;
import entidades.Vector2D;
import org.jdom2.input.SAXBuilder;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;
/**
 *
 * @author comrade
 */
public class SimulacionDataAccess {
private String nombreArchivo;
    private String path;
    private Document doc;
    private Element root;
   

    public SimulacionDataAccess(String path) {
        this.nombreArchivo = "Simulaciones.xml";
        this.path = path;
        this.root = getRoot();
        this.doc = this.root.getDocument();
    }

    public List<Simulacion> getAll() {
        List<Simulacion> simulaciones = new ArrayList<>();
        for(Element hijo: this.root.getChildren()){
            Simulacion simulacion = this.extraerSimulacion(hijo);
            simulaciones.add(simulacion);
        }
        return simulaciones;
    }
    
    private Simulacion extraerSimulacion(Element e){
        Simulacion s = new Simulacion(
                e.getAttributeValue("ID"),
                e.getAttributeValue("NOMBRE")
        );
        Element elementosPelotas = e.getChild("PELOTAS");
        for(Element p: elementosPelotas.getChildren()) {
            s.addPelota(extraerPelota(p));
        }
        return s;
    }

    private Pelota extraerPelota(Element e){
        Vector2D posInicial = extraerVector(e.getChild("POSINICIAL"));
        Vector2D velInicial = extraerVector(e.getChild("VELINICIAL"));
        Pelota p = new Pelota(
                posInicial,
                velInicial,
                e.getAttributeValue("COLOR")
        );
        return p;
    }
    private Vector2D extraerVector(Element e){
        return new Vector2D(
                Double.parseDouble(e.getAttributeValue("X")),
                Double.parseDouble(e.getAttributeValue("Y"))
        );
    }

    
    private void updateFile() throws IOException {
        XMLOutputter output = new XMLOutputter();
        output.setFormat(Format.getPrettyFormat());
        try (FileWriter fw = new FileWriter(path + nombreArchivo)) {
            output.output(doc, fw);
        }
    }

    private Element getRoot() {
        Element new_root = new Element("root");
        try {
            File inputFile = new File(path + nombreArchivo);
            SAXBuilder saxBuilder = new SAXBuilder();
            Document document = saxBuilder.build(inputFile);
            new_root = document.getRootElement();
        } catch (Exception ex) {
            Logger.getLogger(DataAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new_root;
    }
}
