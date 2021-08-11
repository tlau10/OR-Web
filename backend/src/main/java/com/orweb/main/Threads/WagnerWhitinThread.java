package com.orweb.main.Threads;

import java.io.IOException;
import com.orweb.main.logic.Methods.WagnerWhitin;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WagnerWhitinThread extends Thread {

    private static final Logger LOGGER = LoggerFactory.getLogger(WagnerWhitinThread.class);
    private WebSocketSession webSocketSession;
    private TextMessage message;

    public WagnerWhitinThread(WebSocketSession webSocketSession, TextMessage message) {
        this.webSocketSession = webSocketSession;
        this.message = message;
    }

    public void run() {
        String txt = message.getPayload();
        String[] str = txt.split(";");
        WagnerWhitin instance = new WagnerWhitin();
        String responseMsg;

        instance.setAnzahlPerioden(Integer.parseInt(str[0]));
        instance.setRuestkosten(Integer.parseInt(str[1])); // = bestellkostensatz
        instance.setPeriodenbedarf(parseStringArrayToIntArray(str[2].split(" ")));
        instance.setLagerkosten(parseStringArrayToDoubleArray(str[3].split(" "), Integer.parseInt(str[0])));
        instance.start();

        responseMsg = parseObjectArrayToString(instance.getObjectAusgabe())+ ";"+ instance.getMinGesamtKosten();
        TextMessage response = new TextMessage(responseMsg);
        LOGGER.info("Text"+ responseMsg);
        try {
            synchronized(webSocketSession) {//TODO
                webSocketSession.sendMessage(new TextMessage(response));
            }
        } catch (IOException e) {
            LOGGER.error("Send Response failed",e);
        }
    }

    private int[] parseStringArrayToIntArray(String[] strArray) {
        int[] intArray = new int[strArray.length];
        for (int i = 0; i < strArray.length; i++) {
            intArray[i] = Integer.parseInt(strArray[i]);
        }
        return intArray;
    }

    private double[] parseStringArrayToDoubleArray(String[] strArray, int anzPerioden) {
        double[] doubleArray;
        if(strArray.length > 1){
            doubleArray = new double[strArray.length];
            for (int i = 0; i < doubleArray.length; i++) {
                doubleArray[i] = Double.parseDouble(strArray[i]);
            }  
        }else{
            doubleArray = new double[anzPerioden];
            for (int i = 0; i < doubleArray.length; i++) {
                doubleArray[i] = Double.parseDouble(strArray[0]);
            }
        }
        return doubleArray;
    }

    private String parseObjectArrayToString( Object[][] objectAusgabe){
        String str="";
        for (int i = 0; i < objectAusgabe.length; i++) {
            for (int j = 0; j < objectAusgabe[i].length; j++) {
                str += objectAusgabe[i][j] + " ";
            }
            str +="--";
        }
        return str;
    }
}
