package com.simpleauth.web;

public class LoginRequest {
	private String cred;
	private String password;
	private String credType;
	
	public String getCred() {
		return cred;
	}
	
	public void setCred(String cred) {
		this.cred = cred;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getCredType() {
		return credType;
	}
	
	public void setCredType(String credType) {
		this.credType = credType;
	}	
}
