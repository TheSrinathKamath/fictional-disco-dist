import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistantComponent } from './assistant.component';
import { MaterialModule } from '../material/material.module';
import { SearchBarModule } from '../components/search-bar/search-bar.module';
import { SearchSuggestionsModule } from '../components/search-suggestions/search-suggestions.module';
import { SearchService } from '../apis/search.service';
import { AssistantService } from './assistant.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AssistantComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SearchBarModule,
    SearchSuggestionsModule,
  ],
  providers: [AssistantService, SearchService],
})
export class AssistantModule {}
