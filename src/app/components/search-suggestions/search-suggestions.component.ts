import { Component, Input, OnInit } from '@angular/core';
import { SuggestionsEntity } from 'src/app/database/_models/suggestions.interface';

@Component({
  selector: 'search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss'],
})
export class SearchSuggestionsComponent implements OnInit {
  @Input() public suggestions!: SuggestionsEntity[];

  constructor() {}

  ngOnInit(): void {}
}
