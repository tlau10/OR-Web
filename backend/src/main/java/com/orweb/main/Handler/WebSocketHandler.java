package com.orweb.main.Handler;


import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import com.orweb.main.Threads.WagnerWhitinThread;

public class WebSocketHandler extends TextWebSocketHandler {
	private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketHandler.class);

	private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		sessions.add(session);
		LOGGER.info("connection: "+session.getId()+" etablished");
		super.afterConnectionEstablished(session);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessions.remove(session);
		super.afterConnectionClosed(session, status);
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		super.handleTextMessage(session, message);

		//hole string aus message
		String requestMessage = message.getPayload();

		//extrahiere id aus message
		String id = requestMessage.substring(0, 1);

		//entferne id aus messafe
		requestMessage = requestMessage.substring(2);

		switch(id){
			case "0":
				new WagnerWhitinThread(session, requestMessage).start();
				break;
		}
	}
}
