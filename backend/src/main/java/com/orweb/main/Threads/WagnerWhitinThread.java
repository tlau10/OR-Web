package com.orweb.main.Threads;

import com.orweb.main.logic.Methods.WagnerWhitin;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

public class WagnerWhitinThread extends Thread {
    private WebSocketSession webSocketSession;
    private TextMessage message;

    public WagnerWhitinThread(WebSocketSession webSocketSession, TextMessage message) {
        this.webSocketSession = webSocketSession;
        this.message = message;
    }

    public void run() {
        
        double[] lk = {1.3, 2.4, 3.7,6.0,10};
        int[] p = {4,6,3,2,3};
        WagnerWhitin instance = new WagnerWhitin();
        instance.setAnzahlPerioden(1);
        instance.setLagerkosten(lk);
        instance.setRuestkosten(4);
        instance.setPeriodenbedarf(p);
        instance.start();
    }

}
