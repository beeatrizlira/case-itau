import { IPeopleData } from '../model/people';
import { PeopleService } from '../services/people.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.scss'],
})
export class PeopleSearchComponent implements OnInit {
  pessoas: IPeopleData[] = [];

  constructor(private readonly peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.get().subscribe({
      next: (dadosPessoas) => {
        this.pessoas = dadosPessoas;
      },
    });
  }
}
