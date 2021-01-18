import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';
import { AdminPanelComponent } from './dashboard/admin-panel/admin-panel.component';
import { AttendanceToggleComponent } from './dashboard/attendance/attendance-toggle/attendance-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AttendanceComponent,
    AdminPanelComponent,
    AttendanceToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
