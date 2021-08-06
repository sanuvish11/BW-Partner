import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private language: string = "hin";
  skill_for_lang: string;
  coreSkill_for_lang: string;
  workExpe_for_lang: string;
  moNumber_for_lang: string;
  otp_for_lang: string;
  otp_verify_for_lang: string;
  resend_otp_for_lang: string;
  perInform_for_lang: string;
  enter_moNumber_for_lang: string;
  andhar_for_lang: string;
  name_for_lang: string;
  middleName_for_lang: string;
  lastName_for_lang: string;
  dob_for_lang: string;
  fatherName_for_lang: string;

  address1_for_lang: string;
  address2_for_lang: string;
  address3_for_lang: string;
  area_for_lang: string;
  city_for_lang: string;
  state_for_lang: string;
  pincode_for_lang: string;

  uploadPhoto: string;
  upload_photo_document: string;
  adhar_front: string;
  andhar_back: string;
  address_proof: string;
  cant_empty_for_lang: string;
  moValidation: string;
  mo_must_number: string;

  family_details_lang: string;
  father_name_lang: string;
  mother_name_lang: string;
  wife_name_lang: string;
  child_name_lang: string;

  account_details_lang: string;
  account_number_lang: string;
  re_account_number_lang: string;
  ifsc_code_lang: string;
  mobile_number_lang: string;
  account_holder_lang: string;

  constructor(
    private _translate: TranslateService,
    public navCtrl: NavController
  ) {}

  _translateLanguage(): void {
    this._translate.use(this.language);
    this.skill_for_lang = this._translate.instant("formData.skills");
    this.coreSkill_for_lang = this._translate.instant("formData.coreSkills");
    this.workExpe_for_lang = this._translate.instant("formData.workExperience");
    this.moNumber_for_lang = this._translate.instant("formData.moNumber");
    this.otp_for_lang = this._translate.instant("formData.otp");
    this.otp_verify_for_lang = this._translate.instant("formData.otpVerify");
    this.resend_otp_for_lang = this._translate.instant("formData.resendOtp");

    this.perInform_for_lang = this._translate.instant("formData.personalInformation");
    this.enter_moNumber_for_lang= this._translate.instant("formData.enter_moNumber");
    this.andhar_for_lang = this._translate.instant("formData.enter_adhar");
    this.name_for_lang = this._translate.instant("formData.enter_name");
    this.middleName_for_lang = this._translate.instant("formData.enter_middleName");
    this.lastName_for_lang = this._translate.instant("formData.enter_lastNamer");
    this.dob_for_lang = this._translate.instant("formData.enter_dob");
    this.fatherName_for_lang = this._translate.instant("formData.enter_fatherName");

    this.address1_for_lang = this._translate.instant("formData.enter_address1");
    this.address2_for_lang= this._translate.instant("formData.enter_address2");
    this.address3_for_lang = this._translate.instant("formData.enter_address3");
    this.area_for_lang = this._translate.instant("formData.enter_area");
    this.city_for_lang = this._translate.instant("formData.enter_city");
    this.state_for_lang = this._translate.instant("formData.enter_state");
    this.pincode_for_lang = this._translate.instant("formData.enter_pinCode");

    this.uploadPhoto = this._translate.instant("formData.uploadPhoto");
    this.upload_photo_document = this._translate.instant("formData.uploadPhotoDocument");
    this.adhar_front = this._translate.instant("formData.adhar_Front");
    this.andhar_back = this._translate.instant("formData.adhar_Back");
    this.address_proof = this._translate.instant("formData.address_proof");
    this.cant_empty_for_lang = this._translate.instant("formData.cant_empty");
    this.moValidation = this._translate.instant("formData.moValidation");
    this.mo_must_number = this._translate.instant("formData.mo_only_number");

    this.family_details_lang = this._translate.instant("formData.family_details");
    this.father_name_lang = this._translate.instant("formData.father_name");
    this.mother_name_lang = this._translate.instant("formData.mother_name");
    this.wife_name_lang = this._translate.instant("formData.wife_name");
    this.child_name_lang= this._translate.instant("formData.child_name");

    this.account_details_lang = this._translate.instant("formData.account_details");
    this.account_holder_lang = this._translate.instant("formData.acount_name");
    // this.account_details_lang = this._translate.instant("formData.account_details");
    this.account_number_lang = this._translate.instant("formData.account_number");
    this.re_account_number_lang = this._translate.instant("formData.re_account_number");
    this.ifsc_code_lang = this._translate.instant("formData.ifsc_code");
    this.mobile_number_lang = this._translate.instant("formData.mobile_number");
  }
}
