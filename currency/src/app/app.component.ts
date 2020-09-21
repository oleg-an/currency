import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {CurrencyModel} from '../currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @Input() sources: Observable<CurrencyModel>[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.sources.push(this.api.getCurrencyValueBySource1());
    this.sources.push(this.api.getCurrencyValueBySource2());
  }
}
