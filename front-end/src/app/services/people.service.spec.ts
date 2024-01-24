import { TestBed, getTestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IPeopleData } from '../people/model/people';

describe('PeopleService', () => {
  let service: PeopleService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const peopleResponseMock: IPeopleData[] = [
    {
      id: 1,
      nome: 'Beatriz',
      celular: '11111111111',
      cpf: '11111111111',
      sexo: 'F',
      email: 'beatriz@teste.com',
      dataNascimento: '20/11/2001',
    },
    {
      id: 2,
      nome: 'Marcos',
      celular: '22222222222',
      cpf: '22222222222',
      sexo: 'M',
      email: 'marcos@teste.com',
      dataNascimento: '20/11/2001',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService],
    });

    service = TestBed.inject(PeopleService);
    injector = getTestBed();
    service = injector.inject(PeopleService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('get() should return people data', () => {
    service.get().subscribe((res) => {
      expect(res).toEqual(peopleResponseMock);
    });

    const req = httpMock.expectOne('/api/pessoas');
    expect(req.request.method).toBe('GET');
    req.flush(peopleResponseMock);
  });

  it('save() should POST and return people data', () => {
    service.save(peopleResponseMock[0]).subscribe((res) => {
      expect(res).toEqual(peopleResponseMock[0]);
    });

    const req = httpMock.expectOne('/api/pessoas');
    expect(req.request.method).toBe('POST');
    req.flush(peopleResponseMock[0]);
  });

  it('get() should throw error 404 when found no data', () => {
    let body: IPeopleData | undefined;
    const mockError = {
      status: 404,
      statusText: 'Not Found',
    };

    service.get('111111111').subscribe({
      error: (thrownError: HttpErrorResponse) => {
        console.log(thrownError);
        expect(thrownError.status).toEqual(mockError.status);
        expect(thrownError.statusText).toEqual(mockError.statusText);
      },
    });

    const testRequest = httpMock.expectOne('/api/pessoas?cpf=111111111');

    testRequest.error(new ProgressEvent('error'), mockError);

    expect(body).toBeUndefined();
  });
});
