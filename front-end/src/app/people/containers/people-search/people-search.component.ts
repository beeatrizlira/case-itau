import { PeopleService } from '../../../services/people.service';
import { IPeopleData } from '../../model/people';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Validator } from '../../utils/validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss'],
})
export class PeopleSearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  pessoas: IPeopleData[] = [];
  displayedColumns: string[] = ['id', 'name', 'cpf', 'birth'];
  form = this.formBuilder.group({
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
    private service: PeopleService
  ) {
    this.form.valueChanges.subscribe(() => {
      if (this.form.value.cpf === '') {
        this.getData();
      }
    });
  }

  private getData() {
    this.subscription = this.service.get(this.form.value.cpf).subscribe({
      next: (data) => {
        this.pessoas = data;
      },
      error: () => {
        this.pessoas = [];
      },
    });
  }

  searchByCpf() {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
