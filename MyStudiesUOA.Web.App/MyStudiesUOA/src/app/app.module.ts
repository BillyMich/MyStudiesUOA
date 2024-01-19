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
import { LoginComponent } from './Authentication/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeTemplateComponent,
    AuthendticationTemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    NouisliderModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
