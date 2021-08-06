import { AbstractControl } from "@angular/forms";

export class AgeValidators {
  static restrictAge(control: AbstractControl) {
    let validateAge = 18;
    let dateString = control.value;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < validateAge) {
      return { restrictAge: true };
    } else {
      null;
    }
  }
}
