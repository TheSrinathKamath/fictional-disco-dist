import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchBarModule } from '../components/search-bar/search-bar.module';
import { SearchSuggestionsModule } from '../components/search-suggestions/search-suggestions.module';
import { SearchService } from '../apis/search.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Button3dModule } from '../components/button-3d/button-3d.module';
import { AssistantModule } from '../assistant/assistant.module';

@NgModule({
  declarations: [LandingPageComponent, HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SearchBarModule,
    SearchSuggestionsModule,
    Button3dModule,
    AssistantModule,
  ],
  providers: [SearchService],
})
export class CoreModule {}
