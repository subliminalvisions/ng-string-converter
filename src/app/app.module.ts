import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextStringFormComponent } from './text-string-form/text-string-form.component';
import { HeaderComponent } from './header/header.component';
import { NumberFormComponent } from './number-form/number-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TextStringFormComponent,
    HeaderComponent,
    NumberFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
