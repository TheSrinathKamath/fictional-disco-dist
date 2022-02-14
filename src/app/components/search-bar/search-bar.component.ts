import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  take,
  takeUntil,
} from 'rxjs/operators';
import { ErrorMessageService } from 'src/app/helpers/error-message.service';
import { ValidatorMessages } from 'src/app/interfaces/validator-messages.interface';
import { SearchBarValidationMessages } from './search-bar.errors';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() public placeholder!: string;
  @Input() public label!: string;
  @Input() public validatorMessages: ValidatorMessages[] =
    SearchBarValidationMessages;

  @Input() public formControl!: FormControl;

  public errorMessage!: string;
  private unsubscriber$: Subject<void> = new Subject<void>();

  constructor(public errorMessageService: ErrorMessageService) {}

  ngOnInit(): void {
    // this.getValue();
    this.getErrors();
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  private getValue(): void {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.unsubscriber$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
  private getErrors(): void {
    this.formControl.statusChanges
      .pipe(
        takeUntil(this.unsubscriber$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((err) => {
        console.log(err)
        this.setErrorMessage();
      });
  }
  private setErrorMessage(): void {
    this.errorMessage =
      this.errorMessageService.setErrorMessage(
        this.validatorMessages,
        this.formControl
      ) || '';
  }
}
