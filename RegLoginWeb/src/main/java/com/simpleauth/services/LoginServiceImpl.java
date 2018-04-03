package com.simpleauth.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simpleauth.dao.LoginDAOImpl;
import com.simpleauth.models.Credential;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDAOImpl loginDAO;
	
	public Credential login(String cred, String password, String credType) {
		Credential retCred = new Credential();
		
		retCred = loginDAO.login(cred, password, credType);
		
		return retCred;
	}
}
