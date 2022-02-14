import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../apis/search.service';
import { SuggestionsEntity } from '../database/_models/suggestions.interface';
import { PatternValidators } from '../validators/pattern.validator';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.scss'],
})
export class AssistantComponent implements OnInit {
  private unsubscriber$: Subject<void> = new Subject<void>();

  public searchFormControl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern(PatternValidators.alphaNumeralOnly),
  ]);
  public searchSuggestions!: SuggestionsEntity[];

  constructor(
    public dialogRef: MatDialogRef<AssistantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .pipe(
        takeUntil(this.unsubscriber$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((val) => this.getSearchSuggestions(val));
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  private getSearchSuggestions(searchKey: string) {
    this.searchService
      .getSearchSuggestions(searchKey)
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe((res) => {
        this.searchSuggestions = res;
      });
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }
}
