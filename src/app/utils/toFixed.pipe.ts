import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toFixed' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number | null): number {
    if (value) return Number(value.toFixed(1));
    else return 0;
  }
}
