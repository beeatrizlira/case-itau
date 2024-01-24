import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchComponent } from './people-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleService } from '../../../services/people.service';
import { of } from 'rxjs';

describe('PeopleSearchComponent', () => {
  let component: PeopleSearchComponent;
  let fixture: ComponentFixture<PeopleSearchComponent>;
  let mockService: jasmine.SpyObj<PeopleService>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('PeopleService', ['get']);
    TestBed.configureTestingModule({
      declarations: [PeopleSearchComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(PeopleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form on init', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('cpf')).toBeDefined();
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

  it('should enable search button when form is valid', () => {
    component.form.setValue({ cpf: '11111111111' });
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(btn.disabled).toBeFalse();
  });

  it('should call searchByCpf() method when search button is clicked', () => {
    spyOn(component, 'searchByCpf');
    component.form.get('cpf')?.setValue('11122233344');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button[type="submit"]');
    btn.click();
    expect(component.searchByCpf).toHaveBeenCalled();
  });
});
