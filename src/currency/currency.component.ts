import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrencyModel} from '../currency.model';
import {CurrencyService} from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent implements OnInit {
  @Input() sources: Observable<CurrencyModel>[];
  currency: Observable<CurrencyModel>;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currency = this.currencyService.get(this.sources);
  }
}
