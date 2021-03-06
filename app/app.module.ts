import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';     // Allows *ngFor
import { HttpClientModule } from '@angular/common/http';
//import { ScrollToModule } from 'ng2-scroll-to-el';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthService } from './../providers/authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
   // ScrollToModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
