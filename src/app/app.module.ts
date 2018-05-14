import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Http, HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WordlistComponent } from './wordlist/wordlist.component';
import {FormsModule} from '@angular/forms';
import {FetchWords} from '../Services/fetchWords';
// import {Routes,RouterModule} from '@angular/router';

// const appRoutes: Routes = [
//   {path: '/' , component: AppComponent}
//   ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [FetchWords],
  bootstrap: [AppComponent]
})
export class AppModule { }
