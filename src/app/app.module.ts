import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoadingService } from './shared/loading.service';
import { HomeComponent } from './home/home.component';
import { RouterLoadingRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
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
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
