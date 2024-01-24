// cpf.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
  transform(value: string | number): string {
    let formattedValue = value + '';

    formattedValue = formattedValue
      .padStart(11, '0')
      .substring(0, 11)
      .replace(/[^0-9]/, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return formattedValue;
  }
}
