import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { AboutComponent } from './landing-page/about/about.component';
import { FillPipe } from 'src/shared/fill.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WelcomeComponent,
    AboutComponent,
    FillPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
