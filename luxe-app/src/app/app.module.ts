import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ScheduleComponent } from './components/schedule/schedule.component';


@NgModule({
  declarations: [
    // Components
    AppComponent,
    BannerComponent,
    ScheduleComponent
  ],
  imports: [
    // Modules
    BrowserModule
  ],
  providers: [
    // Services
  ],
  bootstrap: [AppComponent] // Root component
})
export class AppModule { }
