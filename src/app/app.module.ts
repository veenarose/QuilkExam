import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Palindrome } from './app.palindrome';
import { Anagram } from './app.anagram';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Palindrome,
    Anagram
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
