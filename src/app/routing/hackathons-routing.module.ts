import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListOfHackathonsComponent } from '../list-of-hackathons/list-of-hackathons.component';
import { FicheHackathonComponent } from '../fiche-hackathon/fiche-hackathon.component';


const hackathonsRoutes: Routes = [
  { path: 'hackathons',  component: ListOfHackathonsComponent },
  { path: 'hackathons/:id', component: FicheHackathonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(hackathonsRoutes)
  ],
  declarations: []
})
export class HackathonsRoutingModule { }
