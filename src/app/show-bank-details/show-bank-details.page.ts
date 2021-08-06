import { Component, OnInit } from '@angular/core';
import { UserBankDetails } from '../Models/userBankDetails';
import { ApiService } from '../services/api.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-show-bank-details',
  templateUrl: './show-bank-details.page.html',
  styleUrls: ['./show-bank-details.page.scss'],
})
export class ShowBankDetailsPage implements OnInit {
  bankDetails: UserBankDetails[] = [];
  userId: string;
  spinner: boolean = false;
  constructor(private languageService: LanguageService, private apiService: ApiService) { }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.languageService._translateLanguage();
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    this.bankDetails = [];
    this.apiService.getBankDetailsById(this.userId)
    .subscribe((res: UserBankDetails[]) => {
      console.log(res);
      if(res){
        this.spinner = false;
        this.bankDetails = res;
      }
    });
  }

}
