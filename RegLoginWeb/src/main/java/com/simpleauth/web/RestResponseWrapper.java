package com.simpleauth.web;

public class RestResponseWrapper<T> {
	private T data;
	private String errMsg;
	
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public String getErrMsg() {
		return errMsg;
	}
	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}	
}
