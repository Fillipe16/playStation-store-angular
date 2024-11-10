import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price: number): String {
    const cifrao_moeda = "$";
    return cifrao_moeda.concat(price.toFixed(2));
  }

}
