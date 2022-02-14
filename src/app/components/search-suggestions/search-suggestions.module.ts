import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSuggestionsComponent } from './search-suggestions.component';
import { SentenceCasePipe } from 'src/app/pipes/sentence-case.pipe';

@NgModule({
  declarations: [SearchSuggestionsComponent, SentenceCasePipe],
  imports: [CommonModule],
  exports: [SearchSuggestionsComponent],
})
export class SearchSuggestionsModule {}
