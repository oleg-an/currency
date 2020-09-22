import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrencyModel} from './currency.model';
import {map} from 'rxjs/operators';
import * as parser from 'fast-xml-parser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getCurrencyValueFromSource1(): Observable<CurrencyModel> {
    return this.http.get('https://www.cbr-xml-daily.ru/daily_utf8.xml', {
      responseType: 'text'
    }).pipe(map(x => {
      const currencies = parser.parse(x).ValCurs.Valute;
      const euro = currencies.find(val => val.CharCode === 'EUR');
      return {
        value: euro?.Value
      };
    }));
  }

  getCurrencyValueFromSource2(): Observable<CurrencyModel> {
    return this.http.get('https://www.cbr-xml-daily.ru/daily_json.js').pipe(map((x: any) => {
      return {
        value: x.Valute.EUR.Value
      };
    }));
  }
}
