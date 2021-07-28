import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private _platform: Platform,
    private _translate: TranslateService
  ) {
    this._initTranslate();  
    // this._platform.ready().then(() => {
    //   this._initTranslate();  
    // });
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
