import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buySell'
})
export class BuySellPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value && typeof value === "string" && (value.toUpperCase() === "B" || value.toUpperCase() === "S")){
      return (value === "B") ? "Buy" : "Sell";
    }
    return null;
  }

}
