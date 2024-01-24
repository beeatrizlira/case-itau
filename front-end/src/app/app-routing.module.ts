import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFormComponent } from './people/containers/people-form/people-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PeopleFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
