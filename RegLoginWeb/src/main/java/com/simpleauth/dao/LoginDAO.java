package com.simpleauth.dao;

import com.simpleauth.models.Token;

public interface LoginDAO {
	public Token login(String cred, String password, String credType);
}
