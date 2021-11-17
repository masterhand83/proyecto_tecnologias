/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dataAccess;

import entidades.Usuario;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
public class UsuarioDataAccess {
    private String nombreArchivo;
    private String path;
    private Document doc;
    private Element root;

    public UsuarioDataAccess(String path) {
        this.nombreArchivo = "Usuarios.xml";
        this.path = path;
        this.root = getRoot();
        this.doc = this.root.getDocument();
    }

    public List<Usuario> getAll() {
        List<Usuario> usuarios = new ArrayList<>();
        for(Element hijo: this.root.getChildren()){
            Usuario usuario = this.extraerUsuario(hijo);
            usuarios.add(usuario);
        }
        return usuarios;
    }
    
    private Usuario extraerUsuario(Element e){
        Usuario usuario = new Usuario(
                e.getAttributeValue("NOMBRE"),
                e.getAttributeValue("CONTRA")
        );
        return usuario;
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
