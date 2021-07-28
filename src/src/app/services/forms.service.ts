import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BwUsers } from '../Models/bwUsers';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  skill_for_lang: string;
  coreSkill_for_lang: string;
  workExpe_for_lang: string;
  moNumber_for_lang: string;
  otp_for_lang: string;
  baseUrl= 'https://bw-partner-server.herokuapp.com/';
  // baseUrl= 'http://localhost:3000/';
 
  private language: string = "hin";
  constructor(private http: HttpClient, private router: Router, private _translate: TranslateService, public navCtrl: NavController) { }

  saveFormData(formData) {
    this.http.post(this.baseUrl + 'api/forms/save', formData)
      .subscribe((data: BwUsers) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/form-two']);
        }
      })
  }

 _translateLanguage(): void {
    this._translate.use(this.language);
    this.skill_for_lang = this._translate.instant("formData.skills");
      this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
      this.workExpe_for_lang = this._translate.instant("formData.workExperience");
      this.moNumber_for_lang = this._translate.instant("formData.moNumber");
      this.otp_for_lang = this._translate.instant("formData.otp");
  }

  getAllData() {
    return this.http.get(this.baseUrl + 'api/forms/get/all');
  }

  getAllJobs() {
    return this.http.get(this.baseUrl + 'api/jobs/get/all/jobs');
  }


  updateFormData(id: string, formData) {
    return this.http.post(this.baseUrl + 'api/forms/update/' + id, formData);
  }

  getCoreSkillsById(id: any) {
    return this.http.get(this.baseUrl + 'api/jobsWorkArea/' + id);
  }

  getAllCoreSkills() {
   return this.http.get(this.baseUrl + 'api/jobsWorkArea/get/all/jobsWorkArea');
  }

  getSkillsById(id: any) {
    return this.http.get(this.baseUrl + 'api/skills/' + id);
  }

  saveImages(adharFront:File, adharBack:File, addressProof: File) {
    const formData = new FormData();
    formData.append('adharFront',adharFront);
    formData.append('adharBack',adharBack);
    formData.append('addressProof',addressProof);
    const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');

    this.http.post(this.baseUrl + 'api/forms', formData,{headers}).subscribe((data: any) => {
      console.log(data);
    },
      (err) => {
        console.log(err);
      })
  }

  updateFormDataImages(id: string, data) {
    const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
    return this.http.put(this.baseUrl + 'api/forms/update/' + id, data, {headers});
  }
}
