import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { BwUsers } from '../Models/bwUsers';
import { ApiService } from '../services/api.service';
import { FormsService } from '../services/forms.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.page.html',
  styleUrls: ['./edit-skills.page.scss'],
})
export class EditSkillsPage implements OnInit {
  allSkills: any[] = [];
  areaOfWork: any = [];
  submitted: boolean = false;
  mainSkills: any[] = [];
  coreSkillsData: string = "";
  SKILLS: any[] = [];
  workExperiece: any[] = [];
  public language: string = "hin";
  id: any = "";
  allCoreSkills: any[] = [];
  allWorkExpe: any[] = [];
  isChecked: boolean = true;
  skills: string;
  usersData: BwUsers = new BwUsers();
  moNumber: string;
  showCoreError: boolean = true;
  showExError: boolean = true;

  selectedValue: any = 0;
  form = new FormGroup({
    moNumber: new FormControl('',),
    adharNumber: new FormControl(''),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    date_of_birth: new FormControl(''),
    fatherName: new FormControl(''),

    address1: new FormControl(''),
    address2: new FormControl(''),
    address3: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    WORK_AREA_HINDI: new FormControl(''),

    SKILLS: new FormControl("", [Validators.required]),
    CORE_SKILLS: new FormArray([]),
    WORK_EXPERIENCE: new FormArray([]),
  });
  
  constructor(
    private formService: FormsService,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private languageService: LanguageService
  ) {
    this.formService.getAllCoreSkills();
  }

  ngOnInit() {
    this.allCoreSkills = JSON.parse(localStorage.getItem("core_skills"));
    this.allWorkExpe = JSON.parse(localStorage.getItem("wor_expe"));
    this.skills = localStorage.getItem('skills')

    console.log(this.allCoreSkills);
    console.log(this.allWorkExpe);
    console.log(this.skills);
    this.moNumber = localStorage.getItem('moNumber');
    this.languageService._translateLanguage();

    this.usersData._id = localStorage.getItem('userId');
    this.getUserById();

    this.formService.getAllJobs().subscribe((data: any) => {
      data.formData.forEach((res: any) => {
        this.allSkills.push(res);
        console.log(this.allSkills)
      });
    });
  }

  getUserById(){
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      console.log(res);
    },(err => console.log(err)))
  }


  getCoreSkills() {
    // dasd
    this.allCoreSkills = [];
    this.allWorkExpe = []
    let skillsData = this.form.get("SKILLS").value;
    console.log(skillsData)
    this.form.value.SKILLS = skillsData.JOB_NAME_HINDI;
    console.log(this.form.value.SKILLS)
    this.getCoreSkillsData(skillsData._id);
  }

  

  getCoreSkillsData(jobId) {
    this.formService.getCoreSkillsById(jobId).subscribe(
      (res: any) => {
        console.log(res);
        this.allCoreSkills = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCoreSkillChecked(checkValue) {
    console.log(checkValue);
    if (checkValue.detail.checked === true) {
      this.showCoreError = false;
      console.log(this.isChecked);
      this.getWorkExpe(checkValue.detail.value._id);
      this.SKILLS.push(checkValue.detail.value);
      console.log(this.SKILLS);
    } else {
      this.showCoreError = true;
      this.workExperiece = [];
      this.isChecked = false;
      setTimeout(() => {
        this.isChecked = undefined;
      });
    }
  }

  getWorkExpe(skillId) {
    console.log(skillId);
    this.formService.getSkillsById(skillId).subscribe((data: any) => {
      console.log(data);
      data.forEach((res: any) => {
        this.allWorkExpe.push(res);
      });
    });
  }

  onExperienceChecked(skillValue) {
    console.log(skillValue);
    if (skillValue.detail.checked === true) {
      this.mainSkills.push(skillValue.detail.value);
      console.log(this.mainSkills);
      this.showExError = false;
    } else {
      this.showExError = true;
      for (let [index, expData] of this.mainSkills.entries()) {
        if (expData.CORE_SKILL_ID === skillValue.detail.value.CORE_SKILL_ID) {
          this.mainSkills.splice(index, 1);
        }
      }
    }
  }

  f(controls) {
    return this.form.get(controls);
  }

  coreSkills() {
    console.log(this.coreSkillsData);
    return this.fb.group({
      SKILLS: this.coreSkillsData,
    });
  }

  setFormValues(){
    this.form.value.moNumber = this.moNumber;
    this.form.value.adharNumber = this.usersData.adharNumber,
    this.form.value.firstName =this.usersData.firstName,
    this.form.value.middleName =this.usersData.middleName,
    this.form.value.lastName =this.usersData.lastName,
    this.form.value.date_of_birth =this.usersData.date_of_birth,
    this.form.value.fatherName = this.usersData.fatherName,

    this.form.value.address1 = this.usersData.address1;
    this.form.value.address2 = this.usersData.address2,
    this.form.value.address3 =this.usersData.address3,
    this.form.value.area =this.usersData.area,
    this.form.value.city =this.usersData.city,
    this.form.value.state =this.usersData.state,
    this.form.value.pincode = this.usersData.pincode
  }

  onSubmit() {
    this.submitted = true;
    this.form.value.CORE_SKILLS = this.SKILLS;
    this.form.value.WORK_EXPERIENCE = this.mainSkills;
    console.log(this.form.value)
    if(this.form.invalid){
      return;
    }
    else if(this.showCoreError == true){
      return
    }
    else if(this.showExError == true){
      return
    }
    
    
    this.setFormValues();
    this.form.value.CORE_SKILLS = this.SKILLS;
    this.form.value.WORK_EXPERIENCE = this.mainSkills;
    console.log(this.form.value);
    this.router.navigate(['/dashboard']);
    // setTimeout(() => {
    //   this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
    //   .subscribe((data: any) => {
    //     if(data){
    //       this.router.navigate(['/form-fourth']);
    //     }
    //   });
    // }, 500);
  }
}
