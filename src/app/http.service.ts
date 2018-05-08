import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  categoriesUrl:string="https://developers.zomato.com/api/v2.1/categories"
  signupUrl:string="http://localhost/backend/signup";
  accountUrl:string="http://localhost/backend/register";
  mobverifyUrl:string="http://localhost/backend/mobverify";
  loginUrl:string="http://localhost/backend/login";
  forgotpwdUrl:string="http://localhost/backend/forgotpwd";
  resetpwdUrl:string="http://localhost/backend/resetpwd";
  //=================
  userId:string = 'abc@cm.in';
  createGroupUrl:string="http://localhost/backend/creategrp";
  createGroupContactUrl:string="http://localhost/backend/creategrpcontact";
  createGroupContactNosUrl:string="http://localhost/backend/creategrpcontactnos";
  getGroupDataUrl:string="http://localhost/backend/groupdata";
  renameGroupUrl:string="http://localhost/backend/renamegroup";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': "3c99a91c83aaebabc4ee9ca71bf6dba4"
    })
  };

constructor(private http: HttpClient) { }

getCategories(){
  return this.http.get(this.categoriesUrl)
}

initiateSignup(email:string): Observable<Object>{
  return this.http.get(this.signupUrl+'?email='+email);
}

verifyMobile(mobile:string): Observable<Object>{
  return this.http.get(this.mobverifyUrl+'?mobile='+mobile);
}

registerAccount(data:any): Observable<Object>{
  return this.http.post(this.accountUrl,data, this.httpOptions);
}

loginUser(data:any): Observable<Object>{
  return this.http.post(this.loginUrl,data, this.httpOptions);
}

initiatePwdReset(email:string): Observable<Object>{
  return this.http.get(this.forgotpwdUrl+'?email='+email);
}

resetPwd(data:any): Observable<Object>{
  return this.http.post(this.resetpwdUrl,data, this.httpOptions);
}
//======================
createGroup(groupName:string): Observable<Object>{
  console.log("sending to server..."+this.userId+":"+groupName);
  const data: any = {'userId': this.userId, 'groupName': groupName};
  return this.http.post(this.createGroupUrl,data,this.httpOptions);
}

createGroupContact(groupName, contactMobile, contactName, contactEmail): Observable<Object>{
  console.log("sending to server..."+this.userId+":"+groupName+":"+contactMobile+":"+contactName+":"+contactEmail);
  const data: any = {'userId': this.userId, 'groupName': groupName,'contactNumber':contactMobile,'contactName':contactName,'contactEmail':contactEmail};
  return this.http.post(this.createGroupContactUrl,data,this.httpOptions);
}

createGroupContactNos(groupName, contactMobile): Observable<Object>{
  console.log("sending to server..."+this.userId+":"+groupName+":"+contactMobile);
  const data: any = {'userId': this.userId, 'groupName': groupName,'contactNumber':contactMobile};
  return this.http.post(this.createGroupContactNosUrl,data,this.httpOptions);
}

getGroupData(): Observable<Object>{
  return this.http.get(this.getGroupDataUrl+'?user='+this.userId);
}

renameGroup(oldGroupName, newGroupName): Observable<Object>{
  console.log("sending to server..."+this.userId+":"+oldGroupName+":"+newGroupName);
  const data: any = {'userId': this.userId, 'oldGroup': oldGroupName,'groupName':newGroupName};
  return this.http.post(this.renameGroupUrl, data,this.httpOptions);
}

}