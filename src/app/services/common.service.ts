import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  familyList: any[] = [];
  bankList: any[] = [];


  constructor() { }

  getFamilyData(){
    return this.familyList;
  }

  setFamilyData(data){
    this.familyList = data;
  }

  getBankData(){
    return this.bankList;
  }

  setBankData(data){
    this.bankList = data;
  }


}
