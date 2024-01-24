import { AbstractControl } from '@angular/forms';

export class Validator {
  static isValidCpf(control: AbstractControl) {
    const cpf = control.value;
    const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

    const isValid = regexCPF.test(cpf);
    if (isValid || cpf === '') return null;
    return { invalidCpf: 'CPF inválido' };
  }
}
