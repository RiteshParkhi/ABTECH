import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import { AppRoutingModule } from './app-routing.module'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RunnerAdvanceComponent } from './runner-advance/runner-advance.component';
import { AppDataService } from './app-data.service';
import { ImageRunnerComponent } from './image-runner/image-runner.component';
import { ScannerComponent } from './scanner/scanner.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunnerAdvanceComponent,
    ImageRunnerComponent,
    ScannerComponent,
    NewsEventsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
