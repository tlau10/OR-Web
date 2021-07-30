package com.orweb.main.Config;

import org.springframework.web.socket.config.annotation.EnableWebSocket;
import com.orweb.main.Handler.WebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry webSocketHandlerRegistry) {
		webSocketHandlerRegistry.addHandler(new WebSocketHandler(), "/web-socket").setAllowedOrigins("*");
	}
}
