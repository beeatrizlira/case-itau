import {Component, OnInit} from '@angular/core';
import {IDadosPessoas, PessoasService} from './services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pessoas: IDadosPessoas[] = [];

  constructor(private readonly pessoaService: PessoasService) {

  }

  ngOnInit(): void {
    this.pessoaService
      .get()
      .subscribe({
        next: (dadosPessoas: IDadosPessoas[]) => {
          this.pessoas = dadosPessoas;
        }
      })
  }
}
