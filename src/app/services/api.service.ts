import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SubUsers } from './../Models/subUsers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  senderid = 'ACCVRF';
  apikey = '2FOIKXErhyfpHlYT';
  message = "Your one time password is 121212"

  baseUrl= 'http://localhost:3000/';

  constructor(private http: HttpClient, private router: Router) { }

createUser(email: string, password: string) {
    const authData: any = { email: email, password: password };
    this.http
      .post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        console.log(response);
      },
      (err: any) => {
        console.log(err);
      });
  }

  login(email: string, password: string) {
    const authData: any = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        "http://localhost:3000/api/user/login",
        authData
      )
      .subscribe(response => {
        console.log(response);
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(["/admin-home"]);
        }
      }
      ,(err: any) => {
        console.log(err);
      });
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/auth']);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }


  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  // http://text.radicaltechsupport.com/V2/http-api.php?senderidsenderid=XXXXXXXXXXXXXXXX&senderid=XXXXXX&number=XXXXXXXXXXX,XXXXXXXXXXX,XXXXXXXXXXX&message=hello there&format=json
  getOtp(number){
    console.log(number);
    number = "918349647091"
    console.log(number);
    const params = new HttpParams()
    .set('apikey', this.apikey)
    .set('senderid', this.senderid)
    .set('number', number)
    .set('message', this.message)
    .set('format', "json");
    console.log(params.toString());
    this.http.get("http://text.radicaltechsupport.com/V2/http-api.php", {params}).subscribe((data: any) => {
      console.log(data);
    },(err => {
      console.log(err);
    }))
  }

  saveSubUsers(userData){
    this.http.post(this.baseUrl + "api" + "/" + "subUsers" + "/" + "save", userData).subscribe((res: any) => {
      console.log(res);
      if(res){
        this.router.navigate(['/admin-user-reports'])
      }
    },
    (err => {
      console.log(err);
    }))
  }

  getAllSubUsers(){
   return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + "get" + "/" + "all");
  }

  getSubUserById(id){
    return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + id);
  }

  updateSubUsers(id, userData: SubUsers){
    this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData)
      .subscribe((res: SubUsers) => {
        console.log(res);
        if(res){
          this.router.navigate(['/admin-user-reports'])
        }
      },
      (err => console.log(err)))
  }
  
  saveSkills(skills){
    return this.http.post(this.baseUrl + "api/" + "jobs/" +  "save/" + "skill", skills);
  }

  saveCoreSkills(coreSkills){
    return this.http.post(this.baseUrl + "api/" + "jobsWorkArea/" +  "save/" + "coreSkills", coreSkills);
  }

  saveExpe(expeData){
    return this.http.post(this.baseUrl + "api/" + "skills/" +  "save/" + "expe", expeData);
  }

  subUserLogin(userValue){
    return this.http.post(this.baseUrl + "api/" + "subUsers/" + "user/login", userValue);
  }
}
