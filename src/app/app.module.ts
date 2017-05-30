import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FirstService } from './first.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ListOfHackathonsComponent } from './list-of-hackathons/list-of-hackathons.component';
import { AppRoutingModule } from './routing/appRouting.module';
import { Page404Component } from './page-404/page-404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HeaderComponent,
    ListOfHackathonsComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
