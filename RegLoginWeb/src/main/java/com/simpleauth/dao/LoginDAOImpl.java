package com.simpleauth.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.simpleauth.models.Token;

@Repository
public class LoginDAOImpl implements LoginDAO {
	
	@Autowired
	DataSource dataSource;
	NamedParameterJdbcTemplate jdbcTemplate;
	
	public LoginDAOImpl(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public Token login(String cred, String password, String credType) {
		Token retCred = new Token();
	    
		if(credType.equals("email")) {
			String sql = "SELECT username, first_name, last_name, email, password "+
							"FROM USERS WHERE EMAIL = :email "+
							"AND is_enabled=1;";
			
			MapSqlParameterSource params = new MapSqlParameterSource();
		    params.addValue("email", cred);
		    
			retCred = this.jdbcTemplate.query(sql,new RowMapper<Token>() {
				public Token mapRow(ResultSet rs, int rowNum) throws SQLException {
					  Token retTok = new Token();
				      retTok.setUsername(rs.getString("username"));
				      retTok.setFirstName(rs.getString("first_name"));
				      retTok.setLastName(rs.getString("last_name"));
				      retTok.setEmail(rs.getString("email"));
				      return retTok;
				  }
	    	}).get(0);	    
		}else if(credType.equals("username")) {
			String sql = "SELECT username, first_name, last_name, email, password "+
					"FROM USERS WHERE username = :username "+
					"AND is_enabled=1;";
			
			MapSqlParameterSource params = new MapSqlParameterSource();
		    params.addValue("username", cred);
		    
			 retCred = this.jdbcTemplate.query(sql,new RowMapper<Token>() {
				  public Token mapRow(ResultSet rs, int rowNum) throws SQLException {
					  Token retTok = new Token();
				      retTok.setUsername(rs.getString("username"));
				      retTok.setFirstName(rs.getString("first_name"));
				      retTok.setLastName(rs.getString("last_name"));
				      retTok.setEmail(rs.getString("email"));
				      return retTok;
				  }
	    	}).get(0);		    
		}
		return retCred;
	}

}
