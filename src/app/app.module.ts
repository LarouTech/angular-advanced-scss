import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './home-page/main/main.component';
import { SectionFeaturesComponent } from './home-page/section-features/section-features.component';
import { SectionToursComponent } from './home-page/section-tours/section-tours.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SectionStoriesComponent } from './home-page/section-stories/section-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SectionFeaturesComponent,
    SectionToursComponent,
    HomePageComponent,
    SectionStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
