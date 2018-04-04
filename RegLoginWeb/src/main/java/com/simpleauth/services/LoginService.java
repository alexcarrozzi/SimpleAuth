package com.simpleauth.services;

import com.simpleauth.models.Token;

public interface LoginService {
	public Token login(String cred, String password, String credType);
}
