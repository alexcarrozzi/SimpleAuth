package com.simpleauth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.simpleauth.models.Token;
import com.simpleauth.services.LoginServiceImpl;
import com.simpleauth.web.LoginRequest;
import com.simpleauth.web.RestResponseWrapper;

@Controller
public class LoginController {
	@Autowired
	LoginServiceImpl loginService;
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST, value="/login")
	public RestResponseWrapper<Token> login(@RequestBody LoginRequest request){
		RestResponseWrapper<Token> response = new RestResponseWrapper<Token>();		

        System.out.println("Received request for get routes");
     
        try{
        	Token myCredential = loginService.login(request.getCred(), request.getPassword(), request.getCredType());
            response.setData(myCredential);
        }catch(Exception e){
            response.setErrMsg(e.getMessage());
        }

        return response;
	}
}
