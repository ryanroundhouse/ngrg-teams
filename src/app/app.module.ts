import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
