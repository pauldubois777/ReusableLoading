import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskIndicatorComponent } from './task-indicator/task-indicator.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ActiveTaskService } from './shared/active-task.service';
import { HomeComponent } from './home/home.component';
import { RouterLoadingRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskIndicatorComponent,
    Page1Component,
    Page2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterLoadingRoutingModule
  ],
  providers: [ActiveTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
