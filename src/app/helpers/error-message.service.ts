import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ValidatorMessages } from '../interfaces/validator-messages.interface';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor() {}

  public setErrorMessage(
    validatorMessages: ValidatorMessages[],
    formControl: FormControl | any
  ): string {
    let errorMessage!: string;
    if (validatorMessages && formControl.errors) {
      const error = validatorMessages.find(
        (validationMessage) =>
          validationMessage.validationType ===
          Object.keys(formControl.errors)[0]
      );
      if (error) {
        errorMessage = error.validationMessage;
      }
    } 
	// else {
    //   console.log('nothin happend');
    //   errorMessage = 'The field is not valid.';
    // }
    return errorMessage;
  }
}
