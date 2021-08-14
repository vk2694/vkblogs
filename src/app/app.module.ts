import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Blog1Component } from './blog1/blog1.component';
import { HomeComponent } from './home/home.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogone', component: Blog1Component }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
