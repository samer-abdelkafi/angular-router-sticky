import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';


@Pipe({
  name: 'productFilter'
})
export class FilterPipe implements PipeTransform {
  public transform(value: Product[], term: string): Product[] {

    if (!term) {
      return value;
    }

    return (value || []).filter(p => p.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      || p.description.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }
}
