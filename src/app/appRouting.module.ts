import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfHackathonsComponent } from './list-of-hackathons/list-of-hackathons.component';

const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'list-of-hackathons',        component: ListOfHackathonsComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
