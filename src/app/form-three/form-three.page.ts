import { Router } from "@angular/router";
import { FormsService } from "./../services/forms.service";
import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LanguageService } from "../services/language.service";
import { BwUsers } from "../Models/bwUsers";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-form-three",
  templateUrl: "./form-three.page.html",
  styleUrls: ["./form-three.page.scss"],
})
export class FormThreePage implements OnInit {
  allSkills: any[] = [];
  areaOfWork: any = [];
  submitted: boolean = false;
  mainSkills: any[] = [];
  coreSkillsData: string = "";
  SKILLS: any[] = [];
  workExperiece: any[] = [];
  public language: string = "hin";
  id: any = "";
  isChecked: boolean = false;

  usersData: BwUsers = new BwUsers();
  moNumber: string;
  showCoreError: boolean = true;
  showExError: boolean = true;
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
    pincode: new FormControl(''),

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
    this.moNumber = localStorage.getItem('moNumber');
    this.languageService._translateLanguage();
    this.formService.getAllJobs().subscribe((data: any) => {
      data.formData.forEach((res: any) => {
        this.allSkills.push(res);
      });
    });

    this.usersData._id = localStorage.getItem('userId');
    this.getUserById();
  }

  getUserById(){
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      this.usersData = res.data;
      this.form.value.SKILLS = this.usersData.SKILLS;
    },(err => console.log(err)))
  }


  getCoreSkills() {
    this.areaOfWork = [];
    this.workExperiece = [];
    let skillsData = this.form.get("SKILLS").value;
    this.form.value.SKILLS = skillsData.JOB_NAME_HINDI;
    this.getCoreSkillsData(skillsData._id);
  }

  getCoreSkillsData(jobId) {
    this.formService.getCoreSkillsById(jobId).subscribe(
      (res: any) => {
        this.areaOfWork = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onCoreSkillChecked(checkValue) {
    if (checkValue.detail.checked === true) {
      this.showCoreError = false;
      this.getWorkExpe(checkValue.detail.value._id);
      this.SKILLS.push(checkValue.detail.value);
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
    this.formService.getSkillsById(skillId).subscribe((data: any) => {
      data.forEach((res: any) => {
        this.workExperiece.push(res);
      });
    });
  }

  onExperienceChecked(skillValue) {
    if (skillValue.detail.checked === true) {
      this.mainSkills.push(skillValue.detail.value);
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
    setTimeout(() => {
      this.formService.updateFormData(localStorage.getItem('userId'), this.form.value)
      .subscribe((data: any) => {
        if(data){
          this.router.navigate(['/form-fourth']);
        }
      });
    }, 500);
  }
}
