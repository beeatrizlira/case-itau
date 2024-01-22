import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFormComponent } from './people/people-form/people-form.component';
import { PeopleSearchComponent } from './people/people-search/people-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PeopleFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
