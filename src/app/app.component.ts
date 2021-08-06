import { Component, OnInit, ViewChild } from "@angular/core";
import { IonRouterOutlet, MenuController, Platform } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from "@angular/router";
import { ApiService } from "./services/api.service";
import { CommonService } from "./services/common.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet
  title = 'socketio-angular';
  ref_code: string = localStorage.getItem('refferalCode');
  constructor(
    private _platform: Platform,
    private _translate: TranslateService,
    private menu: MenuController,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private router: Router,
    private apiService: ApiService,
    private commonService: CommonService
  ) {
    this._initTranslate();
    this.backButtonEvent();
    
  }

  openEnd() {  
    this.menu.close();
    }

    share(){
      this.menu.close();
      var appUrl = 'https://play.google.com/store/apps/details?id=com.whatsapp'

      this.socialSharing.share('Install the app and add ' +this.ref_code+ ' this refId to get the money', '', '', appUrl)
      .then(() => {
      })
    }

    backButtonEvent(){
      this.platform.backButton.subscribeWithPriority(50, async() => {
             if(this.router.url === '/form-one'){
              navigator["app"].exitApp();
             }
             else if(this.router.url === '/dashboard'){
               navigator["app"].exitApp();
             }
             else if(this.routerOutlet && this.routerOutlet.canGoBack()){
               this.routerOutlet.pop();
             }
           });
     }
 

  private _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang("hin");

    if (this._translate.getBrowserLang() !== undefined) {
      this._translate.use(this._translate.getBrowserLang());
    } else {
      this._translate.use("hin"); // Set your language here
    }
  }
}
