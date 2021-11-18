/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entidades;
import entidades.Vector2D;
/**
 *
 * @author comrade
 */
public class Pelota {
    private Vector2D posicionInicial;
    private Vector2D velocidadInicial;
    private String color;

    public Pelota(Vector2D posicionInicial, Vector2D velocidadInicial, String color) {
        this.posicionInicial = posicionInicial;
        this.velocidadInicial = velocidadInicial;
        this.color = color;
    }

    public Vector2D getPosicionInicial() {
        return posicionInicial;
    }

    public void setPosicionInicial(Vector2D posicionInicial) {
        this.posicionInicial = posicionInicial;
    }

    public Vector2D getVelocidadInicial() {
        return velocidadInicial;
    }

    public void setVelocidadInicial(Vector2D velocidadInicial) {
        this.velocidadInicial = velocidadInicial;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    
    
}
