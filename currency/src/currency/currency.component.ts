import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {CurrencyModel} from '../currency.model';
import {catchError, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit {
  @Input() sources: Observable<CurrencyModel>[];
  currency: Observable<CurrencyModel>;

  ngOnInit(): void {
    this.currency = timer(0, 10000).pipe(
      switchMap(_ => this.getCurrency(this.sources)));
  }

  private getCurrency(sources: Observable<CurrencyModel>[]): Observable<CurrencyModel> {
    if (!sources.length) {
      return of({value: null});
    }

    const source = sources[0];
    return source.pipe(
      map(x => x),
      catchError(_ =>
        this.getCurrency(sources.filter(val => val !== source))));
  }
}
