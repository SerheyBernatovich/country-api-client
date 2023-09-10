import { Pipe, PipeTransform } from '@angular/core';
import { IData } from '../models/data';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(data: IData[], search: string): IData[] {
    return data.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
