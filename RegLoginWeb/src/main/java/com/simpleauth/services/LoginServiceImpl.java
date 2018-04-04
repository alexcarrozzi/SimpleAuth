package com.simpleauth.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simpleauth.dao.LoginDAOImpl;
import com.simpleauth.models.Token;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDAOImpl loginDAO;
	
	public Token login(String cred, String password, String credType) {
		Token retCred = new Token();
		
		retCred = loginDAO.login(cred, password, credType);
		
		return retCred;
	}
}
