import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule   
  ],
  providers: [
    AppComponentService,
    HttpClient
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
