import { Router } from "@angular/router";
import { FormsService } from "./../services/forms.service";
import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { LanguageService } from "../services/language.service";
import { BwUsers } from "../Models/bwUsers";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-form-fourth",
  templateUrl: "./form-fourth.page.html",
  styleUrls: ["./form-fourth.page.scss"],
})
export class FormFourthPage implements OnInit {
  id: string;
  multipleImageUpload: any[] = [];
  formData: any = {};
  frontAdhar: string;
  backAdhar: string;
  usersData: BwUsers = new BwUsers();
  address: string;
  submitted: boolean = false;
  SKILLS: any[] = [];
  mainSkills: any[] = [];
  showError: boolean = false;
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

    SKILLS: new FormControl(""),
    CORE_SKILLS: new FormArray([]),
    WORK_EXPERIENCE: new FormArray([]),
    
    adharFront: new FormControl(null, [Validators.required]),
    adharBack: new FormControl(null, [Validators.required]),
    addressProof: new FormControl(null, [Validators.required]),
    agreement: new FormControl(null, [Validators.required]),
  });
  constructor(
    private camera: Camera,
    private formService: FormsService,
    private router: Router,
    private apiService: ApiService,
    private languageService: LanguageService
  ) {}
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };
  ngOnInit() {
    this.languageService._translateLanguage();
    this.usersData._id = localStorage.getItem('userId');
    this.multipleImageUpload = [];
    this.getUserById(); 
    // this.formService.getAllData().subscribe((data: any) => {
    //   this.formData = data;
    //   console.log(this.formData);
    //   this.formData.formData.forEach((data2: any) => {
    //     this.id = data2._id;
    //   });
    // });
  }

  getAdharForntPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
      const imageName = date + ".jpeg";
      this.frontAdhar = "data:image/jpeg;base64," + imageData;
      // this.frontAdhar = base64Image;
      const imageBlob = this.dataURItoBlob(imageData);
      const file: File = new File([imageBlob], imageName, {
        type: "image/jpeg",
      });
      this.form.patchValue({ adharFront: file });
      this.form.get("adharFront").updateValueAndValidity();
      console.log(this.form.value.adharFront);
     
      // this.formService.saveImages(file);
    });
  }

  getCheckedValue(value) {
    console.log(value);
    console.log(this.form.value);
    if (value.detail.checked === true) {
      this.showError = false;
      this.form.value.agreement = value.detail.value;
      console.log(this.form.value);
    } else {
      this.showError = true;
      this.form.value.agreement = null;
      console.log(this.form.value);
    }
  }

  getUserById(){
    this.apiService.getBwUsersById(this.usersData._id).subscribe((res: any) => {
      console.log(res);
      this.usersData = res.data;
    },(err => console.log(err)))
  }

  getAdharBackPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
      const imageName = date + ".jpeg";
      this.backAdhar = "data:image/jpeg;base64," + imageData;
      // this.backAdhar = base64Image;
      const imageBlob = this.dataURItoBlob(imageData);
      const file: File = new File([imageBlob], imageName, {
        type: "image/jpeg",
      });
      this.form.patchValue({ adharBack: file });
      this.form.get("adharBack").updateValueAndValidity();
      console.log(this.form.value.adharBack);
      
      // this.formService.saveImages(file);
    });
  }

  getAddressProofPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      const date = new Date().valueOf();
      const imageName = date + ".jpeg";
      this.address = "data:image/jpeg;base64," + imageData;
      // this.address = base64Image
      const imageBlob = this.dataURItoBlob(imageData);
      const file: File = new File([imageBlob], imageName, {
        type: "image/jpeg",
      });
      this.form.patchValue({ addressProof: file });
      this.form.get("addressProof").updateValueAndValidity();
      console.log(this.form.value.addressProof);
      
      // this.formService.saveImages(file);
    });
  }

  f(controls) {
    return this.form.get(controls);
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "image/jpeg" });
    console.log(blob);
    return blob;
  }

  setFormValues(){
    console.log(this.usersData)
    this.form.value.moNumber = localStorage.getItem('moNumber');
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
    
    this.form.value.SKILLS  = this.usersData.SKILLS
    this.form.value.CORE_SKILLS = this.usersData.CORE_SKILLS;
    this.form.value.WORK_EXPERIENCE = this.usersData.WORK_EXPERIENCE;
    this.multipleImageUpload.push(this.form.value.adharFront);
    this.multipleImageUpload.push(this.form.value.adharBack);
    this.multipleImageUpload.push(this.form.value.addressProof);
  }

  onSubmit() {
    this.setFormValues();
  
    this.submitted = true;
   
    if (this.form.invalid) {
      return;
    }
    else if(this.showError == true){
      return
    }

    const formData = new FormData();
    for (let img of this.multipleImageUpload) {
      formData.append("images", img);
    }
    
    this.apiService.updateImagesById(localStorage.getItem('userId'), formData).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          this.formService
            .updateFormData(localStorage.getItem('userId'), this.form.value)
            .subscribe((data: any) => {
              if (data) {
                this.multipleImageUpload = [];
                this.router.navigate(["/login"]);
              }
            });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
