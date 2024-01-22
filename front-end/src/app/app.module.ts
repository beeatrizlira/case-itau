import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatInputModule,
    AppRoutingModule,
    PeopleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
