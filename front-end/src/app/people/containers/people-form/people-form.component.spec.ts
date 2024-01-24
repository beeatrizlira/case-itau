import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormComponent } from './people-form.component';
import { PeopleService } from '../../../services/people.service';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPeopleData } from '../../model/people';
import { FormBuilder } from '@angular/forms';

describe('PeopleFormComponent', () => {
  let component: PeopleFormComponent;
  let fixture: ComponentFixture<PeopleFormComponent>;

  const peopleData: IPeopleData = {
    name: 'Beatriz',
    cpf: '11111111111',
    phone: '11911111111',
    gender: 'F',
    email: 'teste@teste.com',
    birth: '20-11-2001',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService, MatSnackBar, MatToolbar, MatCard, FormBuilder],
      imports: [HttpClientTestingModule],
      declarations: [PeopleFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(PeopleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should validate name field correctly', () => {
    let nomeControl = component.form.get('name');
    if (nomeControl) {
      nomeControl?.setValue('');
      expect(nomeControl?.valid).toBeFalsy();

      nomeControl?.setValue('Beatriz');
      expect(nomeControl?.valid).toBeTruthy();
    }
  });

  it('should validate cpf field correctly', () => {
    let cpfControl = component.form.get('cpf');
    if (cpfControl) {
      cpfControl?.setValue('');
      expect(cpfControl?.valid).toBeFalsy();

      cpfControl?.setValue('11111111111');

      expect(cpfControl?.valid).toBeTruthy();
    }
  });

  it('should validate gender field correctly', () => {
    let genderControl = component.form.get('gender');
    if (genderControl) {
      genderControl?.setValue('');
      expect(genderControl?.valid).toBeFalsy();

      genderControl?.setValue(peopleData.gender);
      expect(genderControl?.valid).toBeTruthy();
    }
  });

  it('should validate email field correctly', () => {
    let emailControl = component.form.get('email');
    if (emailControl) {
      emailControl?.setValue('');
      expect(emailControl?.valid).toBeFalsy();
      fixture.detectChanges();
      emailControl?.setValue('teste@teste.com');
      expect(emailControl?.valid).toBeTruthy();
    }
  });

  it('should validate birth field correctly', () => {
    let birthControl = component.form.get('birth');
    if (birthControl) {
      birthControl?.setValue('');
      expect(birthControl?.valid).toBeFalsy();

      birthControl?.setValue(peopleData.birth);
      expect(birthControl?.valid).toBeTruthy();
    }
  });

  it('should show required field error message', () => {
    const data = peopleData;
    data.cpf = '';
    component.form.patchValue(data);

    const result = component.getErrorMessage('cpf');
    expect(result).toBe('campo obrigatório');
  });

  it('should show email invalid message', () => {
    const data = peopleData;
    data.email = 'teste.com';

    component.form.patchValue(data);

    const result = component.getErrorMessage('email');
    expect(result).toBe('e-mail inválido');
  });

  it('should show cpf invalid message', () => {
    const data = peopleData;
    data.cpf = '111';
    component.form.patchValue(data);

    const result = component.getErrorMessage('cpf');
    expect(result).toBe('CPF inválido');
  });

  it('should enable save button when form is valid', () => {
    component.form.setValue({
      name: 'Beatriz',
      phone: '11111111111',
      cpf: '12345678900',
      gender: 'F',
      email: 'teste@teste.com',
      birth: '20-11-2001',
    });
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(btn.disabled).toBeFalse();
  });

  it('should call onSubmit() method when save button is clicked', async () => {
    spyOn(component, 'onSubmit');

    component.form.setValue({
      name: 'Beatriz',
      phone: '11111111111',
      cpf: '12345678900',
      gender: 'F',
      email: 'teste@teste.com',
      birth: '20-11-2001',
    });

    fixture.detectChanges();
    await fixture.whenStable();
    const btn = fixture.nativeElement.querySelector(
      '[data-testid="submitButton"'
    );
    btn.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
