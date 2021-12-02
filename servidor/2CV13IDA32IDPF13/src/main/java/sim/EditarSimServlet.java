/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sim;

import dataAccess.MultipartFormAccess;
import dataAccess.SimulacionDataAccess;
import entidades.Pelota;
import entidades.Simulacion;
import entidades.Vector2D;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Iterator;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author comrade
 */
public class EditarSimServlet extends HttpServlet {

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
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet EditarSimServlet</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet EditarSimServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
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
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        res.setContentType("application/json");
        SimulacionDataAccess simData = new SimulacionDataAccess(getServletContext().getRealPath("/"));
        MultipartFormAccess files = new MultipartFormAccess(getServletContext().getRealPath("/"));
        files.upload(req);
        HashMap<String, String> params = files.getParams();
        Simulacion viejaSim = simData.getSimulacion(params.get("id"));
        Simulacion nuevaSim = new Simulacion(
                viejaSim.getId(),
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
            nuevaSim.addPelota(p);
        }
        simData.updateSimulacion(nuevaSim);
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
