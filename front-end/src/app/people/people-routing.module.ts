import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleSearchComponent } from './containers/people-search/people-search.component';

const routes: Routes = [
  {
    path: 'search',
    component: PeopleSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
