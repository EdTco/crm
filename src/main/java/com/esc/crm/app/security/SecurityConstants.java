package com.esc.crm.app.security;

import org.springframework.beans.factory.annotation.Value;

public class SecurityConstants {

	@Value("${security.jwt.token.expire-length: ${EXPIRE-LENGTH}}")
	public static long EXPIRATION_TIME;
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Authorization";
	public static final String SIGN_UP_URL = "/users";

	@Value("${security.jwt.token.secret-key: ${SECRET_KEY}}")
	public static String TOKEN_SECRET;
}
