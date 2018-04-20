import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StoreservicesComponent } from './components/storeservices/storeservices.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    BannerComponent,
    ScheduleComponent,
    StoreservicesComponent
  ],
  imports: [
    // Modules
    BrowserModule,
    HttpModule
  ],
  providers: [
    // Services
    DataService
  ],
  bootstrap: [AppComponent] // Root component
})
export class AppModule { }
