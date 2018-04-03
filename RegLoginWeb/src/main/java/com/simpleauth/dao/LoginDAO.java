package com.simpleauth.dao;

import com.simpleauth.models.Credential;

public interface LoginDAO {
	public Credential login(String cred, String password, String credType);
}
