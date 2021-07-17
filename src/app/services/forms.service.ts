import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient, private router: Router) { }

  saveFormData(formData) {
    this.http.post('http://localhost:3000/api/forms/save', formData)
      .subscribe((data: any) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/form-two']);
        }
      })
  }

  getAllData() {
    return this.http.get('http://localhost:3000/api/forms/get/all');
  }

  getAllJobs() {
    return this.http.get('http://localhost:3000/api/jobs/get/all/jobs');
  }


  updateFormData(id: string, formData) {
    return this.http.put('http://localhost:3000/api/forms/update/' + id, formData);
  }

  getCoreSkillsById(id: any) {
    return this.http.get('http://localhost:3000/api/jobsWorkArea/' + id);
  }

  getAllCoreSkills() {
   return this.http.get('http://localhost:3000/api/jobsWorkArea/get/all/jobsWorkArea');
  }

  getSkillsById(id: any) {
    return this.http.get('http://localhost:3000/api/skills/' + id);
  }

  // saveImages(file:File) {
  //   console.log(file)
  //   const formData = new FormData();
  //   formData.append('image',file) ;
  //   const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');

  //   this.http.post('http://localhost:3000/api/forms', formData,{headers}).subscribe((data: any) => {
  //     console.log(data);
  //   },
  //     (err) => {
  //       console.log(err);
  //     })
  // }

  saveImages(adharFront:File, adharBack:File, addressProof: File) {
    const formData = new FormData();
    formData.append('adharFront',adharFront);
    formData.append('adharBack',adharBack);
    formData.append('addressProof',addressProof);
    const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');

    this.http.post('http://localhost:3000/api/forms', formData,{headers}).subscribe((data: any) => {
      console.log(data);
    },
      (err) => {
        console.log(err);
      })
  }

  updateFormDataImages(id: string, data) {
    const headers = new HttpHeaders().set("Accept", 'multipart/form-data; charset=utf-8');
    return this.http.put('http://localhost:3000/api/forms/update/' + id, data, {headers});
  }
}
