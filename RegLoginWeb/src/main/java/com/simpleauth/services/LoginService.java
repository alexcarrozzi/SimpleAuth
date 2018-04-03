package com.simpleauth.services;

import com.simpleauth.models.Credential;

public interface LoginService {
	public Credential login(String cred, String password, String credType);
}
