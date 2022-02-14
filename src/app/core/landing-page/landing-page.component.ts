import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/apis/search.service';
import { SuggestionsEntity } from 'src/app/database/_models/suggestions.interface';
import { PatternValidators } from 'src/app/validators/pattern.validator';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  public searchFormControl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.pattern(PatternValidators.alphaNumeralOnly),
  ]);

  private unsubscriber$: Subject<void> = new Subject<void>();

  public searchSuggestions!: SuggestionsEntity[];

  constructor(private searchService: SearchService) {}

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
}
