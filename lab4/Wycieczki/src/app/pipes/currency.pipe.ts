import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
    static exchangeRates: {[index: string]:number} = {
        'PLN': 1,
        'USD': 0.23,
        'EUR': 0.21
    }
    static activeCurrency: string = 'PLN';

    transform(value: number): string {
      return value * CurrencyPipe.exchangeRates[CurrencyPipe.activeCurrency] + CurrencyPipe.activeCurrency;
    }

    static setActiveCurrency(currency: string) {
        if (currency in Object.keys(CurrencyPipe.exchangeRates)) CurrencyPipe.activeCurrency = currency
    }
}
