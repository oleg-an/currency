import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {CurrencyModel} from '../currency.model';
import {switchMap} from 'rxjs/operators';

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
    this.currency = interval(1000).pipe(
      switchMap(x => this.sources[0])
    );
  }
}
