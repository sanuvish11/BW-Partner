import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SubUsers } from './../Models/subUsers';
import { BwUsers } from '../Models/bwUsers';
import { UserBankDetails } from '../Models/userBankDetails';
import { FamilyDetails } from '../Models/familyDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
    otp = new BehaviorSubject<number>(0);
  senderid = 'BHWORK';
  apikey = '2FOIKXErhyfpHlYT';
  _OTP = Math.floor(1000 + Math.random() * 9000);
  message = "Dear Partner, use OTP " + this._OTP +  "to verify your mobile number - Bharat Worker"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  baseUrlForLocal= 'http://localhost:3001/';
  baseUrl= 'https://bw-app-server.herokuapp.com/';
  // ahmadAccount = 'https://bw-app-server.herokuapp.com/';
  constructor(private http: HttpClient, private router: Router) { }

createUser(email: string, password: string) {
    const authData: any = { email: email, password: password };
    this.http
      .post("http://localhost:3000/api/user/signup", authData,this.httpOptions)
      .subscribe(response => {
        console.log(response);
      },
      (err: any) => {
        console.log(err);
      });
  }

  logOut(){
    localStorage.removeItem('userId');
    localStorage.removeItem('refferalCode');
    localStorage.removeItem('walletAmount');
    localStorage.removeItem('moNumber');
    this.router.navigate(['/login']);
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
    let _OTP = Math.floor(1000 + Math.random() * 9000);
    let message = "Dear Partner, use OTP " + _OTP +  " to verify your mobile number - Bharat Worker";
      console.log(message)
      this.otp.next(_OTP);
      this.router.navigate(['/otp']);
   
    // const params = new HttpParams()
    // .set('apikey', this.apikey)
    // .set('senderid', this.senderid)
    // .set('number', number)
    // .set('message', message)
    // .set('format', "json");
    // console.log(params.toString());
    // this.http.get("http://text.radicaltechsupport.com/V2/http-api.php", {params}).subscribe((data: any) => {
    //   console.log(data);
    // },(err => {
    //   console.log(err);
    // }))
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
   return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + "get" + "/" + "all",this.httpOptions);
  }

  getSubUserById(id){
    return this.http.get(this.baseUrl + "api" + "/" + "subUsers" + "/" + id,this.httpOptions);
  }

  updateSubUsers(id, userData: SubUsers){
    this.http.put(this.baseUrl + "api" + "/" + "subUsers" + "/" + "update" + "/" + id, userData,this.httpOptions)
      .subscribe((res: SubUsers) => {
        console.log(res);
        if(res){
          this.router.navigate(['/admin-user-reports'])
        }
      },
      (err => console.log(err)))
  }
  
  saveSkills(skills){
    return this.http.post(this.baseUrl + "api/" + "jobs/" +  "save/" + "skill", skills,this.httpOptions);
  }

  saveCoreSkills(coreSkills){
    return this.http.post(this.baseUrl + "api/" + "jobsWorkArea/" +  "save/" + "coreSkills", coreSkills,this.httpOptions);
  }

  saveExpe(expeData){
    return this.http.post(this.baseUrl + "api/" + "skills/" +  "save/" + "expe", expeData,this.httpOptions);
  }

  subUserLogin(userValue){
    return this.http.post(this.baseUrl + "api/" + "subUsers/" + "user/login", userValue);
  }

  getOtpFromMoNumber(mobileNo: any){
    return this.http.get(this.baseUrl + "api/forms/getotp/" + mobileNo, this.httpOptions)
  }

  verifyOtp(verify_otp: any){
    console.log(verify_otp)
    return this.http.post(this.baseUrl + "api/forms/verify_otp", verify_otp,this.httpOptions);
  }


  updateImagesById(id: string, photofile: any){
    const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
    return this.http.post(this.baseUrl + "api/forms/imageupdate/" + id, photofile, {headers});
  }

  getBwUsersById(id: string){
    return this.http.get(this.baseUrl + "api/forms/getprofile/" + id,this.httpOptions);
  }

  getValuesFromPincode(pincode: any){
    return this.http.get(this.baseUrl + "api/allIndiaPostal/getAllIndiaPin/" + pincode,this.httpOptions);
  }

  getAllNotifications(){
    return this.http.get(this.baseUrl + "api/notification/getAll");
  }

  updateNotificationData(id: any, notiData: any){
    return this.http.post(this.baseUrl + "api/notification/update/" + id, notiData);
  }

  saveBankDetails(bankDetails: UserBankDetails){ 
     this.http.post(this.baseUrl + "api/bankDetails/save", bankDetails)
     .subscribe((res: UserBankDetails) => {
       console.log(res);
       if(res){
         this.router.navigate(['/show-bank-details']);
       }
     },(err => { console.log(err) }));
  }

  updateBankDetailsById(userId: string, formData: UserBankDetails){
    this.http.post(this.baseUrl+ "api/bankDetails/update/" + userId, formData)
    .subscribe((data => { 
      console.log(data)
      if(data){
        this.router.navigate(['/show-bank-details']);
      }
    }), (err => {console.log(err)} ));
  }

  getBankDetailsById(userId: string){
    return this.http.get(this.baseUrl + "api/bankDetails/" + userId);
  }

  saveFamilyDetails(userFamilyDetails: FamilyDetails){
    this.http.post("https://bw-app-server.herokuapp.com/api/familyDetail/save", userFamilyDetails)
    .subscribe((res: FamilyDetails) => {
      console.log(res);
      if(res){
        this.router.navigate((['/show-family-details']));
      }
    },(err =>{console.log(err)}));
  }

  getFamilyDetailsById(userId: string){
    return this.http.get(this.baseUrl + "api/familyDetail/" + userId);
  }

  verifyRefferalCode(refferalCode: string){
    return this.http.get(this.baseUrl + "api/forms/reffral/" + refferalCode);
  }

  saveUserNotification(userData: any){
    this.http.post(this.baseUrl + "api/userNotification/save", userData)
      .subscribe((res: any) => {
        console.log(res);
      }, (err => {console.log(err)}));
  }

  getUserNotiData(){
    return this.http.get(this.baseUrl + "api/userNotification/getAll");
  }

  updateUserNotiData(id: string, formData: any){
    this.http.post(this.baseUrl + "api/userNotification/update/" + id, formData)
      .subscribe((res: any) => {
        console.log(res);
      }, (err => {console.log(err)}));
  }

  updateFamilyDetails(userId: string, formData: any){
    this.http.post(this.baseUrl + "api/familyDetail/update/" + userId, formData)
    .subscribe((res: any) => {
      console.log(res);
      if(res){
        this.router.navigate(['/show-family-details'])
      }
    }, (err => {console.log(err)}));
  } 
}
