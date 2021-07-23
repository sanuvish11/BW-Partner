import { Router } from '@angular/router';
import { FormsService } from './../services/forms.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.page.html',
  styleUrls: ['./form-three.page.scss'],
})
export class FormThreePage implements OnInit {
  allSkills: any[] = [];
  areaOfWork: any = []
  skill_for_lang: any;
  show: boolean = false;
  coreSkill_for_lang: any;
  workExpe_for_lang: any;
  mainSkills: any[] = [];
  coreSkillsData: string= '';
  SKILLS: any[] = []
  workExperiece: any[] = [];
  public language : string = 'hin';
  id: any = '';
  isChecked: boolean;
  form = new FormGroup({
    SKILLS: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    CORE_SKILLS:  new FormArray([
   
     ]),
    WORK_EXPERIENCE: new FormArray([

     ]),
  })
  constructor(private formService: FormsService,  private fb: FormBuilder, private router:Router,
    private _platform       : Platform, 
              public navCtrl 		  : NavController,
              private _translate 	  : TranslateService) { 
    this.formService.getAllCoreSkills();
  }

  ngOnInit() {
    this._translateLanguage()
    this.formService.getAllJobs().subscribe((data: any) => {
      console.log(data)
      data.formData.forEach((res: any) => {
        this.allSkills.push(res);
      });
      console.log(this.allSkills);
    });
    this.formService.getAllData()
    .subscribe((data: any) => {
      console.log(data)
      data.formData.forEach((data2: any) => {
       this.id =  data2._id;
      })
    });
    console.log(this.id)
  }

  // public ionViewDidLoad() : void
  // {
  //    this._initialiseTranslation();
  // }

  // public changeLanguage() : void
  // {
  //    this._translateLanguage();
  // }

  private _translateLanguage() : void
  {
    console.log(this.language);
    this.show = true;
     this._translate.use(this.language);
     this._initialiseTranslation();    
  }

  private _initialiseTranslation() : void
  {
     setTimeout(() => 
     {
        this.skill_for_lang 			  = this._translate.instant("home.skills");
        this.coreSkill_for_lang 	= this._translate.instant("home.coreSkills");
        this.workExpe_for_lang 	= this._translate.instant("home.workExperience");
     }, 250);
  }

  getCoreSkills(){
    let skillsData = this.form.get('SKILLS').value;
    this.form.value.SKILLS = skillsData.JOB_NAME
    this.getCoreSkillsData(skillsData._id);
  }

  getCoreSkillsData(jobId){
    this.formService.getCoreSkillsById(jobId).subscribe((res: any) => {
      console.log(res);
      this.areaOfWork = res;
    },
    (err) => {
      console.log(err);
    })
  }

  onCoreSkillChecked(checkValue){
    console.log(checkValue)
    if(checkValue.detail.checked === true){
      this.getWorkExpe(checkValue.detail.value._id)
      this.SKILLS.push(checkValue.detail.value);
      console.log(this.SKILLS)
    }
    else{
      this.isChecked = false;
        this.workExperiece = [];
    //   for (let [index, expData] of this.workExperiece.entries()) {
    //     if(expData._id === checkValue.detail.value._id){
    //       this.workExperiece.splice(index, 1);
    //     }
    // }

    }
  }

  getWorkExpe(skillId){
    console.log(skillId)
    this.formService.getSkillsById(skillId).subscribe((data: any) => {
      console.log(data);
      data.forEach((res: any) => {
        this.workExperiece.push(res)
      })
      // this.workExperiece = data;
      console.log(this.workExperiece)
      // data.MAIN_SKILL.forEach((res: any) => {
      //   this.mainSkills.push(res);
      // })
    })
  }

  onExperienceChecked(skillValue){
    console.log(skillValue);
    if(skillValue.detail.checked === true){
      this.mainSkills.push(skillValue.detail.value)
      console.log(this.mainSkills)
    }
    else{
      for (let [index, expData] of this.mainSkills.entries()) {
        if(expData.CORE_SKILL_ID === skillValue.detail.value.CORE_SKILL_ID){
          this.mainSkills.splice(index, 1);
        }
    }
  }
}

  coreSkills(){
    console.log(this.coreSkillsData)
    return this.fb.group({
      SKILLS: this.coreSkillsData
    })
  }

  onSubmit(){
    console.log(this.SKILLS)
    this.form.value.CORE_SKILLS = this.SKILLS;
    this.form.value.WORK_EXPERIENCE = this.mainSkills;
    console.log(this.form.value)
    setTimeout(() => {
      /*this.formService.updateFormData(this.id, this.form.value)
      .subscribe((data: any) => {
        if(data){
          this.router.navigate(['/form-fourth']);
        }
      });*/
    }, 500)
    this.router.navigate(['/form-fourth']);
  }
  
}
