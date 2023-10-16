import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponentComponent,
    SuccessComponentComponent,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
