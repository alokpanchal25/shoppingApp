import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs';

export function PasswordValidator(control: FormControl): Observable<any> {
  if (control.value.length <= 4 || control.value.length >= 10) {
    let result = { passwordInvald: true };
    return Observable.of(result);
  }
  else {
    return Observable.of(null);
  }
}