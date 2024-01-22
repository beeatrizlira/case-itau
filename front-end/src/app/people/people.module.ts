import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [PeopleSearchComponent, PeopleFormComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    NgxMaskDirective,
    RouterModule,
  ],
  exports: [MatFormFieldModule],
  providers: [provideNgxMask({})],
})
export class PeopleModule {}
