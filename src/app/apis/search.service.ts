import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuggestionsEntity } from '../database/_models/suggestions.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  public getSearchSuggestions(
    searchKey: string
  ): Observable<SuggestionsEntity[]> {
    return this._http
      .get<SuggestionsEntity[]>(
        `${environment.baseUrl}assets/data/suggestions.json`
      )
      .pipe(
        map((suggestions) =>
          suggestions.filter((s) => s.tags.includes(searchKey))
        )
      );
  }
}
