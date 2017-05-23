import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ListOfHackathonsComponent } from './list-of-hackathons/list-of-hackathons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HeaderComponent,
    ListOfHackathonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
          {
            path: 'homepage',
            component: HomepageComponent
          },
          {
            path: 'list-of-hackathons',
            component: ListOfHackathonsComponent
          }
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
