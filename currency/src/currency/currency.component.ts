import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrencyModel} from '../currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.less']
})
export class CurrencyComponent {
  @Input() sources: Observable<CurrencyModel>[];
  value = 89.31;
}
