import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { HomeTemplateComponent } from './Home/home-template/home-template.component';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { MatIconModule } from '@angular/material/icon';
import { AuthendticationTemplateComponent } from './Authentication/authendtication-template/authendtication-template.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeTemplateComponent,
    AuthendticationTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    NouisliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
