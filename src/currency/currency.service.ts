import {Injectable} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {CurrencyModel} from '../currency.model';
import {catchError, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  get(sources: Observable<CurrencyModel>[]): Observable<CurrencyModel> {
    return timer(0, 10000).pipe(
      switchMap(_ => this.getFromAvailableSource(sources)));
  }

  private getFromAvailableSource(sources: Observable<CurrencyModel>[]): Observable<CurrencyModel> {
    if (!sources.length) {
      return of({value: null});
    }

    const source = sources[0];
    return source.pipe(
      catchError(_ =>
        this.getFromAvailableSource(sources.filter(val => val !== source))));
  }
}
