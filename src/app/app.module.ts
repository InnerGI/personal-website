import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { AboutComponent } from './landing-page/about/about.component';
import { FillPipe } from 'src/shared/fill.pipe';
import { PassionComponent } from './landing-page/passion/passion.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WelcomeComponent,
    AboutComponent,
    FillPipe,
    PassionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ScrollingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
