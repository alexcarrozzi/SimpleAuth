import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private requestOptions:RequestOptions;
  private headers:Headers;
  private body;

  constructor(private http:Http) {

  }

  register = (firstName:string, lastName:string, userName:string, password:string, email:string):Observable<any> => {
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Accepts",'application/json');

    this.body = {
        "fistName":firstName,
        "lastName":lastName,
        "userName":userName,
        "password":password,
        "email":email
    };

    this.requestOptions = new RequestOptions({
      method:RequestMethod.Post,
      url:'/register',
      headers: this.headers,
      body:JSON.stringify(this.body)
    });
    
    return this.http
    .request(new Request(this.requestOptions))
    .map((res: Response) => {
      if(res){
        return [{numUpdated:res.status, json:res.json()}];
      }
    });
  }

  login = (cred:string, password:string):Observable<any> => {
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Accepts",'application/json');

    let credType = cred.indexOf("@")>-1?"email":"username";

    this.body = {
      "cred": cred,
      "password":password,
      "credType":credType
    };
    
    this.requestOptions = new RequestOptions({
      method:RequestMethod.Post,
      url:'/login',
      headers: this.headers,
      body:JSON.stringify(this.body)
    });
    
    return this.http
    .request(new Request(this.requestOptions))
    .map((res: Response) => {
      if(res){
        return [{numUpdated:res.status, json:res.json()}];
      }
    });
  }

}
