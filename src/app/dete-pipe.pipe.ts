import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detePipe'
})
export class DetePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
