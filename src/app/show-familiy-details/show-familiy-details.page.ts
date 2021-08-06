import { Component, OnInit } from '@angular/core';
import { FamilyDetails } from '../Models/familyDetails';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-familiy-details',
  templateUrl: './show-familiy-details.page.html',
  styleUrls: ['./show-familiy-details.page.scss'],
})
export class ShowFamiliyDetailsPage implements OnInit {
  userId: string;
  familyData: FamilyDetails = new FamilyDetails;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.apiService.getFamilyDetailsById(this.userId)
    .subscribe((res: any) => {
      console.log(res);
       this.familyData = res.data
       console.log(this.familyData)
    },(err => (console.log(err))));
  }
}
