import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomePage1Component } from './home/home-page1/home-page1.component';
import { HomePage2Component } from './home/home-page2/home-page2.component';
import { HomePage3Component } from './home/home-page3/home-page3.component';
import { HomePage4Component } from './home/home-page4/home-page4.component';
import { AboutPage1Component } from './about/about-page1/about-page1.component';
import { AboutPage2Component } from './about/about-page2/about-page2.component';
import { AboutPage3Component } from './about/about-page3/about-page3.component';
import { AboutPage4Component } from './about/about-page4/about-page4.component';
import { AboutPage5Component } from './about/about-page5/about-page5.component';


const appRouter: Routes =[
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomePage1Component,
    HomePage2Component,
    HomePage3Component,
    HomePage4Component,
    AboutPage1Component,
    AboutPage2Component,
    AboutPage3Component,
    AboutPage4Component,
    AboutPage5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
