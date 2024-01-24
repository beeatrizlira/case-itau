import { CommonModule } from '@angular/common';
import { NgModule, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PeopleFormComponent } from './containers/people-form/people-form.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleSearchComponent } from './containers/people-search/people-search.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CpfPipe } from '../pipes/cpf.pipe';
@NgModule({
  declarations: [PeopleSearchComponent, PeopleFormComponent, CpfPipe],
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
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
  ],
  exports: [MatFormFieldModule],
  providers: [provideNgxMask({})],
})
export class PeopleModule {}
