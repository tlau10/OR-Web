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
        WagnerWhitin instance = new WagnerWhitin();
    }

}
