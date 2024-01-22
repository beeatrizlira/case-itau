import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router';
import { Validator } from './validator';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss'],
})
export class PeopleFormComponent {
  validator: Validator = new Validator();
  isSubmitting = false;
  form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email]],
    celular: [
      '',
      [
        Validators.required,
        Validators.pattern('[0-9 ]{11}'),
        Validators.maxLength(11),
        Validators.minLength(11),
      ],
    ],
    sexo: ['', Validators.required],
    cpf: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validator.isValidCpf,
      ],
    ],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: PeopleService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOninit(): void {}

  onSubmit() {
    this.isSubmitting = true;
    if (this.form.value) {
      this.service.save(this.form.value).subscribe({
        next: this.onSucess.bind(this),
        error: this.onError.bind(this),
      });
    }
  }

  private onError() {
    this.isSubmitting = false;
    this.snackBar.open('Erro ao salvar usuário', '', { duration: 5000 });
  }

  private onSucess() {
    this.isSubmitting = false;
    this.snackBar.open('Usuário criado com sucesso', '', { duration: 5000 });
    this.router.navigate(['/search']);
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    let errorMessage;

    if (field?.hasError('required')) {
      errorMessage = 'campo obrigatório';
    }

    if (field?.hasError('email')) {
      errorMessage = 'e-mail inválido';
    }

    if (field?.hasError('invalidCpf')) errorMessage = 'CPF inválido';

    return errorMessage;
  }
}
