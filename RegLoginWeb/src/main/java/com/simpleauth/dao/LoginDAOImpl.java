package com.simpleauth.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.simpleauth.models.Credential;

@Repository
public class LoginDAOImpl implements LoginDAO {
	
	@Autowired
	DataSource dataSource;
	NamedParameterJdbcTemplate jdbcTemplate;
	
	public LoginDAOImpl(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public Credential login(String cred, String password, String credType) {
		Credential retCred = new Credential();
	    boolean isValid = false;
	    
		if(credType.equals("email")) {
			String sql = "SELECT password FROM USERS WHERE EMAIL = :email";
			
			MapSqlParameterSource params = new MapSqlParameterSource();
		    params.addValue("email", cred);
		    
		    @SuppressWarnings("unchecked")
			String sqlPass  = (String) this.jdbcTemplate.query(sql,new RowMapper() {
				  public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				        return rs.getString(1);
				  }
	    	}).get(0);
		    isValid = sqlPass.equals(password);		    
		}else if(credType.equals("username")) {
			String sql = "SELECT password FROM USERS WHERE USERNAME = :username";
			
			MapSqlParameterSource params = new MapSqlParameterSource();
		    params.addValue("username", cred);
		    
		    @SuppressWarnings("unchecked")
			String sqlPass  = (String) this.jdbcTemplate.query(sql,new RowMapper() {
				  public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				        return rs.getString(1);
				  }
	    	}).get(0);		    
		    isValid = sqlPass.equals(password);
		}
	    retCred.setLoggedIn(isValid);
		return retCred;
	}

}
