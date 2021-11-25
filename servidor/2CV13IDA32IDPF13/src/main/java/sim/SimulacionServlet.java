/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sim;

import com.google.gson.Gson;
import dataAccess.MultipartFormAccess;
import dataAccess.SimulacionDataAccess;
import entidades.Pelota;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import entidades.Simulacion;
import entidades.Vector2D;
import java.util.Iterator;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author comrade
 */
public class SimulacionServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        Simulacion sim;
        SimulacionDataAccess simData = new SimulacionDataAccess(getServletContext().getRealPath("/"));
        MultipartFormAccess files = new MultipartFormAccess(getServletContext().getRealPath("/"));
        files.upload(request);
        HashMap<String, String> params = files.getParams();
        
        sim = new Simulacion(
                UUID.randomUUID().toString(),
                params.get("name")
        );
        JSONArray json1 = new JSONArray(params.get("pelotas"));
        Iterator<Object> i = json1.iterator();
        while(i.hasNext()){
            JSONObject obj = (JSONObject)i.next();
            Vector2D posicion = new Vector2D(
                    obj.getDouble("x"),
                    obj.getDouble("y")
            );
            Vector2D velocidad = new Vector2D(
                    obj.getDouble("velx"),
                    obj.getDouble("vely")
            );
            
            Pelota p = new Pelota(
                    posicion,
                    velocidad,
                    "#FFFFFF"
            );
            sim.addPelota(p);
        }
        simData.crearSimulacion(sim);
        try (PrintWriter out = response.getWriter()) {
            out.println((new Gson()).toJson(sim));
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("application/json");
        String body  = IOUtils.toString(req.getReader());
        JSONObject json = new JSONObject(body);
        SimulacionDataAccess simData = new SimulacionDataAccess(getServletContext().getRealPath("/"));
        simData.deleteSimulacion(json.getString("id"));
        try (PrintWriter out = res.getWriter()) {
            out.println("{\"h\":203}");
        }
    }
    

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
