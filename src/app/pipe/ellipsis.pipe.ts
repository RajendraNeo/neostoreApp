import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  public transform(value: string): string {
    // pick whatever number fits your need
    if (value.length > 40) {
      return value.substring(0, 40).concat('...');
    }
    return value;
  }

}
