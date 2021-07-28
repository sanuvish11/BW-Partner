import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-set-skills',
  templateUrl: './admin-set-skills.page.html',
  styleUrls: ['./admin-set-skills.page.scss'],
})
export class AdminSetSkillsPage implements OnInit {
  allSkills: any[] = [];
  allCoreSkills: any[] = [];
  areaOfWork: any = []
  constructor(private formService: FormsService,
    private apiService: ApiService) { }
  skillForm = new FormGroup({
    JOB_NAME: new FormControl(''),
    STATUS: new FormControl("1")
  })

  coreSkillsForm = new FormGroup({
    JOB_UID: new FormControl(null),
    STATUS: new FormControl("1"),
    WORK_AREA: new FormControl(''),
  })

  workExpeForm = new FormGroup({
    skillID: new FormControl(null),
    CORE_SKILL_ID: new FormControl(null),
    STATUS: new FormControl('1'),
    WORK_EXPE: new FormControl(''),
  })
  ngOnInit() {
    this.getAllSkillsData();
    // this.getAllCoreSkills();
  }

  getAllSkillsData(){
    this.allSkills = [];
    this.formService.getAllJobs().subscribe((data: any) => {
      console.log(data)
      data.formData.forEach((res: any) => {
        this.allSkills.push(res);
      });
      console.log(this.allSkills);
    });
  }

  // getAllCoreSkills(){
  //   this.formService.getAllCoreSkills().subscribe((data: any) => {
  //     console.log(data);
  //     this.allCoreSkills = [];
  //     data.formData.forEach((res: any) => {
  //       this.allCoreSkills.push(res);
  //     });
  //     console.log(this.allCoreSkills);
  //   },(err => console.log(err)));
  // }

  getSkillsValue(){
    console.log(this.workExpeForm.value.skillID)
    this.getCoreSkillsData(this.workExpeForm.value.skillID);
  }
  
  getCoreSkillsData(jobId){
    this.formService.getCoreSkillsById(jobId).subscribe((res: any) => {
      console.log(res);
      this.allCoreSkills = [];
      this.allCoreSkills = res;
    },
    (err) => {
      console.log(err);
    })
  }

  setSkills(){
    this.apiService.saveSkills(this.skillForm.value).subscribe((res: any) => {
      if(res){
        this.getAllSkillsData();
      }
    });
    this.skillForm.reset();
  }

  setCoreSkills(){
    this.apiService.saveCoreSkills(this.coreSkillsForm.value).subscribe((res: any) => {
      console.log(res);
    },(err => console.log(err)))
    this.coreSkillsForm.reset();
  }

  setWorkExpe(){
    this.apiService.saveExpe(this.workExpeForm.value).subscribe((res: any) => {
      console.log(res);
    },(err => console.log(err)));
    this.workExpeForm.reset();
  }

}
