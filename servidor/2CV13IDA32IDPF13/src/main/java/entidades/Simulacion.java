/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entidades;

import java.util.List;
import entidades.Pelota;
import java.util.ArrayList;
/**
 *
 * @author comrade
 */
public class Simulacion {
    String id;
    String nombre;
    List<Pelota> pelotas;

    public Simulacion(String id, String nombre) {
        this.id = id;
        this.nombre = nombre;
        this.pelotas = new ArrayList<>();
    }
    public void addPelota(Pelota p){
        this.pelotas.add(p);
    }

    public String getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public List<Pelota> getPelotas() {
        return pelotas;
    }
    
}
